import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="footer">
        <h4 className="text-center">All Right Reserved &#169; AkhilTech</h4>
        <p className="text-center mt3">
          <Link to="/about">about</Link>|
          <Link to="/contact">contact</Link>|
          <Link to="/policy">privacy Policy</Link>|
        </p>
      </div>
    );
};

export default Footer;