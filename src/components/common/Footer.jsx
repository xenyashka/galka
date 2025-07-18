import React from 'react';
import './Footer.css';

const Footer = ({ links = [], socialLinks = [], copyright = '©2025, Все права защищены.' }) => {
  return (
    <div className="footer">
      <div className="footer-brand">
        <div className="footer-logo">
          <img src="/images/logo_black.svg" alt="Галка" className="footer-logo-icon" />
          <span className="footer-logo-name">Галка</span>
        </div>
        <p className="footer-copyright">{copyright}</p>
      </div>

      <div className="footer-contact">
        <p className="footer-contact-title">Связаться с нами:</p>
        <p className="footer-contact-email">icon-ai.tech@yandex.ru</p>
      </div>
    </div>
  );
};

export default Footer;
