import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-placeholder"> <img src="./assets/LIC-Logo.png" alt="LIC-Logo" srcset="" /> </div>
      <div className="contact-info">
        <div className="text-highlight">
          Join the Team of M. Madhusudhanan, LIC Development Officer, Chennai, to make your dreams come true
        </div>
        <div className="horizontal-info">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div>Skip to main content</div>
          <div>
            <i className="fas fa-phone"></i> +91 9600108347
          </div>
          <div>
            <i className="fab fa-whatsapp"></i> +91 9600108347
          </div>
          <div>
            <i className="fas fa-map-marker-alt"></i> Branch Locator
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
