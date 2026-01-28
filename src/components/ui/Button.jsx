import React from 'react';

/**
 * Reusable Button component with built-in accessibility and variants.
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  as: Component = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-2 rounded-sm font-medium tracking-widest uppercase text-[10px] transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed no-star-interaction outline-none focus-visible:ring-1 focus-visible:ring-brand-accent/50';
  
  const variants = {
    primary: 'bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white',
    accent: 'bg-brand-accent/10 border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/20 hover:border-brand-accent/50 shadow-sm shadow-brand-accent/5',
    outline: 'border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/5 hover:border-white/20',
  };

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
