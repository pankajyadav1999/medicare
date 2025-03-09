import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // ====fontawesome====// 
import images from '../assets/images/medicare_logo.png';
function Layout({ children }) {
  return (
    <div>
      {/* topbar */}
      <div className='topbar bg-secondary p-2 text-white fs-md-5'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-8'>
            <spna><i class="fa-solid fa-phone"></i>&nbsp;Medicare@gmail.com</spna> &nbsp;
            <span><i class="fa-solid fa-envelope"></i>+91 7607261633</span>
          </div>
          <div className='col-3'> 
            <div className='icon'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-instagram"></i>  
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#"><img src={images} alt="Description of Image" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-md-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/blog" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blog
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/career">Career</Link>
                </li>
              </ul>

            </div>

            <Link className="button" role="button" to="#">LogIn</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {children} {/* This will render the route-specific content */}
      </main>

  {/* gap-images */}
  <div className="Add_extention">
                <div className="row"> 
                </div>
            </div>

{/* --end */}

          
      {/* Footer */}
      <footer className='footer'>
        <div className="row">

          <div className="col-3">
            <div>
              <img src={images} alt="Description of Image" />
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-3">
            <h3>Our Services   </h3>
            <ul>
              <li>Care Programs</li>

              <li>Order Medicine</li>

              <li>Book Homecare</li>

              <li>Book Consult</li>

              <li> Book Consult</li>

              <li>Book Tests</li>
            </ul></div>
          <div className="col-3">
            <h3>Partner Hospitals</h3>
            <ul>
              <li>Vimhans Nayati Super Speciality Hospital</li>

              <li>Woodlands Multispeciality Hospital</li>

              <li>Primus Super Speciality Hospital</li>

              <li>Paras Hospital, Gurgaon</li>

              <li>Sakra World Hospital</li>

              <li>Artemis Hospitals</li>

              <li>SRI Hospital</li>
            </ul>
          </div>
          <div className="col-3">
            <h3>Contact Us</h3>
            <ul>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-instagram"></i>  
            </ul>
          </div>
        </div>
      </footer>
      <div className='copyright'>
        <div className='text-center bg-secondary p-4 text-white'>
          <span>Copyright © 2025 Medicare || Developed by <b>Sp_Infotech.com</b></span>
        </div>
      </div>
    </div>
  );
}

export default Layout;
