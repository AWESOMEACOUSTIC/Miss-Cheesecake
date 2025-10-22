import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    let token;
    
    // Get token from Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    
    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized, no token provided'
      });
    }
    
    try {
      // Verify token
      const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret-key';
      const decoded = jwt.verify(token, JWT_SECRET);
      
      // Add user info to request
      req.user = decoded;
      
      next();
    } catch (error) {
      console.error('JWT verification error:', error);
      return res.status(401).json({
        success: false,
        message: 'Not authorized, token failed'
      });
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error in auth middleware'
    });
  }
};

export const adminOnly = async (req, res, next) => {
  try {
    // Check if user info is attached to request
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized, no user info'
      });
    }
    
    // Get fresh user info from database (to ensure role is current)
    const user = await User.findById(req.user.id);
    
    // Check if user exists and is admin
    if (!user || user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized as admin'
      });
    }
    
    next();
  } catch (error) {
    console.error('Admin middleware error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error in admin middleware'
    });
  }
};
