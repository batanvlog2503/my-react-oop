
import React, {useState} from 'react';
function Header({ onLogoClick }) {
  return (
    <nav className="navbar navbar-expand-lg d-flex" style={{ backgroundColor: '#ff8c42', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div className="container">
        <a className="navbar-brand text-white fw-bold fs-3" href="#" onClick={onLogoClick}>
            <i>TECHBLOG</i>
        </a>
        <div className="navbar-nav d-flex flex-row gap-3">
          <a className="nav-link text-white" href="#" onClick={onLogoClick}>Trang Chủ</a>
          <a className="nav-link text-white" href="#">Về Chúng Tôi</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;  
