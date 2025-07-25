// src/middlewares/error.middleware.js
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({ 
    success: false,
    message: 'Route not found' 
  });
};

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ 
      success: false,
      message: 'Invalid or expired token' 
    });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};