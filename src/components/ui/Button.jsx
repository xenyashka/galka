import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  className = '',
  icon = null
}) => {
  const baseClasses = 'flex items-center justify-center rounded-lg font-manrope font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-button text-button hover:opacity-90 shadow-lg',
    secondary: 'bg-white text-primary border border-gray-200 hover:bg-light-1',
    accent: 'bg-accent-1 text-white hover:bg-accent-2'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm h-10',
    md: 'px-6 py-3 text-base h-12',
    lg: 'px-8 py-4 text-lg h-14'
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;