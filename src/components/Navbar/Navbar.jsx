import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <img className='logo' src={require('./Logo.png')} alt="" />
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="../../Header/Header.jsx">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="../../About/About.jsx">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="../../Work/Work.jsx">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="../../Testimonials/Testimonials.jsx">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="../../Contact/Contact.jsx">Contact</a>
              </li>
              
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
