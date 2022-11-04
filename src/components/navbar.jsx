import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/logo.png';

export default class Navbars extends Component {
    render() {
        return(
        <nav className="navbar navbar-expand-md" id='navbars'>
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={logo} alt="logo"/></Link>
        <button className="navbar-toggler" type="button" data-toggle="canvas" data-target="#bs-canvas-right" aria-expanded="false" aria-controls="bs-canvas-right">
          <span className="navbar-toggler-icon"></span>
        </button>      
        <div className="collapse navbar-collapse mt-2 sidebar" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to="/#services" className="nav-link">
                    Our Services
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#whyus">Why Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#testimonial">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success font-weight-bold" to="/">Register</Link>
            </li>
          </ul>
        </div>
      </div>
        </nav>
        )
    }
}