import React from 'react';

const Header: React.FC = () => {
  return (
    <section className="banner-section">
      <div className="overlay">
        <div className="logo">
          <img src="/images/jb_logo_new.png" alt="Logo" />
        </div>
        <div className="title">
          <h3>Chalishia High School <br/> EIIN - 115498</h3>
        </div>
      </div>
    </section>
  );
};

export default Header;