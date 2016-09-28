import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Cre8 Link</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
