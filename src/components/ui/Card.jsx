import React from 'react';

/**
 * Reusable Card component for content grouping.
 */
const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  const variants = {
    default: 'bg-brand-surface/40 backdrop-blur-md border border-white/5 shadow-2xl',
    glass: 'bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
    interactive: 'bg-brand-surface/40 border border-white/5 hover:border-brand-primary/40 transition-all duration-500 hover:shadow-brand-primary/5 hover:-translate-y-1',
  };

  return (
    <div 
      className={`rounded-2xl p-6 md:p-8 no-star-interaction ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
