import React from 'react';

/**
 * Semantic section component for logical page blocks.
 * Provides consistent vertical padding and spacing.
 */
const Section = ({ 
  children, 
  className = '', 
  id, 
  ariaLabel,
  ...props 
}) => {
  return (
    <section 
      id={id}
      aria-label={ariaLabel}
      className={`py-12 md:py-20 lg:py-24 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
