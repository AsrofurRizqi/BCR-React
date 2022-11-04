import React, { Component } from 'react'
import Service from '../images/img_service.png';

export default class Layanan extends Component {
    render() {
        return(
                    <div className="container layanan my-5" id="services">
            <div className="row">
                <div className="col-md-6 mb-4">
                <img src={Service} className="img-fluid" alt='img-service'/>
                </div>
                <div className="col-md-6 justify-content-center" data-aos="fade-left" data-aos-duration="1000">
                <h3 className="font-weight-bold">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                <p className="mt-4 mb-2 font-weight-light">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul className="mt-3">
                            <li className="mb-2"><a href={() => false}>Sewa Mobil Dengan Supir di Bali 12 Jam</a></li>
                            <li className="mb-2"><a href={() => false}>Sewa Mobil Lepas Kunci di Bali 24 Jam</a></li>
                            <li className="mb-2"><a href={() => false}>Sewa Mobil Jangka Panjang Bulanan</a></li>
                            <li className="mb-2"><a href={() => false}>Gratis Antar - Jemput Mobil di Bandara</a></li>
                            <li className="mb-2"><a href={() => false}>Layanan Airport Transfer / Drop In Out</a></li>
                </ul>
                </div> 
            </div>
            </div>
        )
    }
}