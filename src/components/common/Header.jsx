import React from 'react';

const Header = ({ 
  logo = null, 
  navigation = [], 
  actions = null,
  className = ''
}) => {
  return (
    <header className={`w-full bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo}
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-1 hover:text-primary font-manrope font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {actions}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;