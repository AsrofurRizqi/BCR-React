import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SewaMobil extends Component {
    render() {
        return(
            <div className="container p-2 mt-5" data-aos="fade-right" data-aos-duration="1000">
      <div className="jumbotron jumbotron-fluid banner-sewa">
        <div className="container text-center">
          <h1 className="font-weight-bold">Sewa Mobil di (lokasimu) Sekarang</h1>
          <div className="deskripsi mt-4">
            <p>lorem ipsum dolor . This is a modified jumbotron that occupies the entire horizontal space of its parent.This is a modified jumbotron that.</p>
          </div>
          <Link to={'/carimobil'} className="btn btn-success btn-md mt-5" role="button">Mulai Sewa Mobil</Link>
        </div>
      </div>
    </div>
        )
    }
}