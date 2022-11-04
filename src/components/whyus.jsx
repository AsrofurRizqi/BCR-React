import React, { Component } from 'react'
import Complete from '../images/icon_complete.png';
import Price from '../images/icon_price.png';
import Jam from '../images/icon_24hrs.png';
import Professional from '../images/icon_professional.png';


export default class WhyUs extends Component {
    render() {
        return(
                    <div className="container p-2 mt-5" id="whyus" data-aos="fade-right" data-aos-duration="1000">
            <div className="col-md-6 whyus" >
                <h3 className="font-weight-bold justify-content-center">Why Us ?</h3>
                <p className="mt-3">Mengapa harus pilih Binar Car Rental ?</p>
            </div>
            <div className="row">
                <div className="col-lg-3 d-flex align-items-stretch">
                <div className="card card-whyus">
                    <div className="card-body">
                    <img src={Complete} className="mb-3" alt='icon-complete'/>
                    <h5 className="card-title">Mobil Lengkap</h5>
                    <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 d-flex align-items-stretch">
                <div className="card card-whyus">
                    <div className="card-body">
                    <img src={Price} className="mb-3" alt='icon-price'/>
                    <h5 className="card-title">Harga Murah</h5>
                    <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 d-flex align-items-stretch">
                <div className="card card-whyus">
                    <div className="card-body">
                    <img src={Jam} className="mb-3" alt='icon-jam'/>
                    <h5 className="card-title">Layanan 24 Jam</h5>
                    <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 d-flex align-items-stretch">
                <div className="card card-whyus">
                    <div className="card-body">
                    <img src={Professional} className="mb-3" alt='icon-professional'/>
                    <h5 className="card-title">Sopir Profesional</h5>
                    <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}