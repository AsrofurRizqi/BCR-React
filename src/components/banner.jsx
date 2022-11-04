import React, { Component } from 'react'
import banner from '../images/img_car.png';
import {Link} from 'react-router-dom'

export default class Banner extends Component {
    render() {
        return(
            <div className="container-fluid banner-utama">
            <div className="row ml-auto pt-4 justify-content-end">
              <div className="col-md-5 align-self-center mr-4" data-aos="fade-right" data-aos-duration="1000">
                <h3 className="mb-3 font-weight-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h3>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to={'/carimobil'} className="btn btn-success btn-md" role="button">
                Mulai Sewa Mobil                
                </Link>
              </div>
            <div className="col-md-6">
              <img src={banner} className="img-fluid banner-img" alt="car"/>
            </div>
            </div>
          </div>
        )
    }
}