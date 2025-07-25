import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authenticateUser = async (email, password) => {

  const user = await User.getByCredentials(email, password);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return token;
};