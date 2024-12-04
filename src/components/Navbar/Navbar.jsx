import React from 'react';
import './Navbar.css';

const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fas fa-caret-down"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <img className='logo' src={require('./Logo.png')} alt="" />
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('home')}>Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('about')}>About</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('work')}>Work</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('testimonial')}>Testimonials</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('contact')}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;