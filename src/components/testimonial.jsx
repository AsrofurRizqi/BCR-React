import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';

export default class Testimonial extends Component {
    render() {
        return(
            <div>
                <div className="text-center mt-2 mt-5" id="testimonial" data-aos="fade-left" data-aos-duration="1000">
      <h3 className="font-weight-bold">Testimonials</h3>
      <p>Berbagai review positif dari para pelanggan kami</p>
    </div>
    <OwlCarousel loop margin={10} autoPlay={true} className="owl-carousel owl-theme owl-img-responsive">
      <div className="item">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 align-self-center text-md-end text-center">
                      <img src="https://cdn0-production-images-kly.akamaized.net/u_9rueZlzAXmS7PiI1LrthnQ-oE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg"
                          alt="" className="rounded-circle" width="90px" height="90px"/>
                  </div>
                  <div className="col-md-8">
                      <div
                          className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                      </div>
                      <p className="pe-md-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                      </p>
                      <p className="font-weight-bold">John Deee, 32 Bromo</p>
                  </div>
              </div>
              </div>
            </div>
      </div>
      <div className="item">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 align-self-center text-md-end text-center">
                      <img src="https://media.suara.com/pictures/653x366/2021/12/28/11513-ilustrasi-kucing-dengan-mata-beda-warna-pixabaybaran65.jpg"
                          alt="" className="rounded-circle" width="90px" height="90px"/>
                  </div>
                  <div className="col-md-8">
                    <div
                    className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </div>
                      <p className="pe-md-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                      </p>
                      <p className="font-weight-bold">John Deee, 32 Bromo</p>
                  </div>
              </div>
              </div>
            </div>
      </div>
      <div className="item">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 align-self-center text-md-end text-center">
                      <img src="https://asset.kompas.com/crops/SV5q4gPkeD8YJTuzO31BqTr9DEI=/192x128:1728x1152/750x500/data/photo/2021/03/06/60436a28b258b.jpg"
                          alt="" className="rounded-circle" width="90px" height="90px"/>
                  </div>
                  <div className="col-md-8">
                    <div
                    className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                      <p className="pe-md-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                      </p>
                      <p className="font-weight-bold">John Deee, 32 Bromo</p>
                  </div>
              </div>
              </div>
            </div>
      </div> 
    </OwlCarousel>
    <div className="container">
      <div className="row button-carousel">
        <div className="col-12 text-center mt-4">
          <a href={() => false} className="btn btn-caro carouselprevbtn owl-prev">
            <i className="fa fa-chevron-left"></i>
          </a>
          <a href={() => false} className="btn btn-caro carouselnextbtn owl-next">
            <i className="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
            </div>
        )
    }
}