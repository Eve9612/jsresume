import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#444',
    padding: '0rem',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>© {currentYear} Evelyn. All rights reserved.</p>
    </footer>
  );
}

export default Footer;