import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Basic validation
    const errors = [];
    if (!name || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters');
    }
    
    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
      errors.push('Valid email is required');
    }
    
    if (!password || password.length < 8) {
      errors.push('Password must be at least 8 characters');
    }
    
    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: 'Validation failed', errors });
    }
    
    // Check if email already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ 
        success: false, 
        message: 'Email is already registered' 
      });
    }
    
    // Create new user - password will be hashed by the pre-save hook
    const user = await User.create({
      name,
      email,
      password
      // role defaults to "user" as defined in the schema
    });
    
    // Generate token for immediate login
    const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret-key';
    const token = jwt.sign(
      { 
        id: user._id,
        email: user.email,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Return success but don't include password
    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Registration failed',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Basic validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }
    
    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });
    
    // Check if user exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
    
    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
    
    // Create JWT token
    const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret-key';
    const token = jwt.sign(
      { 
        id: user._id,
        email: user.email,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Send response
    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Login failed',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const profile = async (req, res) => {
  try {
    // This function will be protected by auth middleware
    // which will add the user to the request
    const userId = req.user.id;
    
    // Find user with password excluded
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error retrieving profile',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
