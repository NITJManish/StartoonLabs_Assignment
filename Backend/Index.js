// app.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create User schema
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  count: { type: Number, default: 0 },
  gender: String,
  lastLoginDate: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

// Middleware for JSON parsing
app.use(express.json());
app.use(cors());


// Register endpoint
app.post('/register', async (req, res) => {
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      name: req.body.name,
      password: hashedPassword,
      email: req.body.email,
      gender: req.body.gender,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Update count and last login date
    user.count++;
    user.lastLoginDate = Date.now();
    await user.save();

    res.status(200).json({ success:true, token: token });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//api to find all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const loggedInUsers = new Set();

// Middleware for authentication
function isAuthenticated(req, res, next) {
    // Check if user is logged in
    if (loggedInUsers.has(req.session.userId)) { // Assuming you're using sessions
        return next();
    } else {
        return res.status(401).json({ error: "Unauthorized" });
    }
}
app.post('/logout', isAuthenticated, (req, res) => {
  const userId = req.session.userId; // Assuming you're using sessions
  // Remove user from the logged-in users list
  loggedInUsers.delete(userId);
  // Destroy the session
  req.session.destroy((err) => {
      if (err) {
          console.error("Error destroying session:", err);
          return res.status(500).json({ error: "Internal Server Error" });
      }
      // Send response indicating successful logout
      return res.status(200).json({ message: "Logged out successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
