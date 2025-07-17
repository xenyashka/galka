import React from 'react';
import './Button.css';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  icon = null,
  theme = 'dark',
}) => {
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    `button--theme-${theme}`,
    disabled ? 'button--disabled' : '',
    className,
  ].join(' ');

  return (
    <button onClick={disabled ? undefined : onClick} disabled={disabled} className={buttonClasses}>
      {children}
      {icon && <span className="button__icon">{icon}</span>}
    </button>
  );
};

export default Button;
