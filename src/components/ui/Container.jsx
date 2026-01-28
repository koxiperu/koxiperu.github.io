import React from 'react';

/**
 * Standard layout container for consistent horizontal padding and max-width.
 */
const Container = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
