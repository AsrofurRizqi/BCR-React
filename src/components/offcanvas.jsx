import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default class Offcanvas extends Component {
    render() {
        return(
            <div id="bs-canvas-right" className="bs-canvas bs-canvas-anim bs-canvas-right position-fixed bg-light h-100">
      <header className="bs-canvas-header px-3 mt-2 pt-1 overflow-auto">
          <button type="button" className="bs-canvas-close float-right close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 className="d-inline-block mb-0 float-left font-weight-bold">BCR</h4>
      </header>
      <div className="bs-canvas-content px-2 py-3">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/#services">Our Services</Link>
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
            <Link className="nav-link btn btn-success font-weight-bold" to="/#f">Register</Link>
          </li>
        </ul>
      </div>    
    </div>
        )
    }
}