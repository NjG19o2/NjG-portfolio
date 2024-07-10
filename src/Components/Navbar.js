import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark color-white ">
  <div className="container-fluid" style={{margin: "0px 103px"}}>
    <NavLink className="navbar-brand text-white" to="/">NjG</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item" style={{ margin: "0 15px" }}>
          <NavLink className="nav-link" to="/" activeClassName="active-link">Home</NavLink>
        </li>
        <li className="nav-item" style={{ margin: "0 15px" }}>
          <NavLink className="nav-link" to="/about" activeClassName="active-link">About</NavLink>
        </li>
        <li className="nav-item" style={{ margin: "0 15px" }}>
          <NavLink className="nav-link" to="/skills" activeClassName="active-link">Skills</NavLink>
        </li>
        <li className="nav-item" style={{ margin: "0 15px" }}>
          <NavLink className="nav-link" to="/project" activeClassName="active-link">Project</NavLink>
        </li>
        <li className="nav-item" style={{ margin: "0 15px" }}>
          <NavLink className="nav-link" to="/contact" activeClassName="active-link">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
