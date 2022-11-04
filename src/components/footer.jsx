import React, { Component } from 'react'
import Facebook from '../images/icon_facebook.png';
import Instagram from '../images/icon_instagram.png';
import Twitter from '../images/icon_twitter.png';
import Mail from '../images/icon_mail.png';
import Twitch from '../images/icon_twitch.png';
import Logo from '../images/logo.png';

import { HashLink as Link } from 'react-router-hash-link';

export default class Footer extends Component {
    render() {
        return(
<div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
        </div>
        <div className="col-md-2 d-flex flex-column footer-menu mb-3">
            <Link className="mb-3" to={'/#services'}>Our Services</Link>
            <Link className="mb-3" to={'/#whyus'}>Why Us</Link>
            <Link className="mb-3" to={'/#testimonial'}>Testimonial</Link>
            <Link className="mb-3" to={'/#faq'}>FAQ</Link>
        </div>
        <div className="col-md-3">
          <a href={() => false}>Connect With Us</a>
          <div className="d-flex mb-3 icon-sosmed mt-3">
            <Link to={"facebook.com"}><img src={Facebook} alt='icon-fb'/></Link>
            <Link to={"instagram.com"} className="ml-3"><img src={Instagram} alt='icon-ig'/></Link>
            <Link to={"twitter.com"}><img src={Twitter} alt='icon-twit'/></Link>
            <Link to={""}><img src={Mail} alt='icon-mail'/></Link>
            <Link to={"twitch.com"}><img src={Twitch} alt='icon-twitch'/></Link>
          </div>
        </div>
        <div className="col-md-2">
            <a href={() => false}>Copyright Binar 2022</a><br/>
            <Link to={'/#'}><img className="mt-3" src={Logo} alt='logo'/></Link>
        </div>
      </div>
    </div>
        )
    }
}