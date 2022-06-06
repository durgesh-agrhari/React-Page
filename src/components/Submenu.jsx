import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Submenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">  
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">React Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Menu1</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">menu2</NavLink>
        </li>

      </ul>
    </div>
  </div> 
</nav>
  )
}

export default Submenu