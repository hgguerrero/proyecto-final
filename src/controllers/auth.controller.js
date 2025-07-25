import * as authService from '../services/auth.service.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    const token = await authService.authenticateUser(email, password);
    
    res.json({ 
      success: true, 
      token 
    });
  } catch (error) {
    next(error);
  }
};