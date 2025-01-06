import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">Home</Link>
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
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {children} {/* This will render the route-specific content */}
      </main>

      {/* Footer */}
      <footer>
        <div class="grid">
          <div class="grid-item"><h2>Footer</h2></div>
          <div class="grid-item"><h2>Footer 2</h2></div>
          <div class="grid-item"><h2>Footer 3</h2></div>
          <div class="grid-item"><h2>Footer 4</h2></div> 
        </div>

      </footer>
    </div>
  );
}

export default Layout;
