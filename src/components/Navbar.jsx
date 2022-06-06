import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">  
    <div className="container-fluid">
    <Link className="navbar-brand" to="/"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="navbar-brand mr-4" aria-current="page" to="/">Mob No  +91 9919162749</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="navbar-brand mr-3" to="/about">Email Id : admin@gmail.com</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="navbar-brand mr-3 " to="/contact">whatsapp no.. + 91 9554510308</NavLink>
        </li>

      </ul>
    </div>
  </div> 
</nav>
  )
}

export default Navbar