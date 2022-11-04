import React, { Component } from 'react'

export default class Faq extends Component {
    render() {
        return(
            <div className="container mt-5" id="faq">
      <div className="row">
        <div className="col-md-5 faq-header" data-aos="fade-right" data-aos-duration="1000">
          <h3 className="font-weight-bold">Frequently Asked Question</h3>
          <p>lorem ipsum sir dolor amet, concecterur adipiscing elit</p>
        </div>
        <div className="col-md-7 asking" data-aos="fade-left" data-aos-duration="1000">
         <div id="accordionExample" className="accordion">
            <div className="card mb-3 card-faq">
              <div id="headingThree" className="bg-white">
                  <h2 className="ml-2">
                      <a href={() => false} data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1" className="btn btn-link collapsed text-dark collapsible-link cursor-pointer">Apa saja syarat yang dibutuhkan ?</a>
                  </h2>
              </div>
              <div id="collapse1" aria-labelledby="heading1" data-parent="#accordionExample" className="collapse">
                  <div className="card-body p-3">
                      <p className="accordion-faq">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                  </div>
              </div>
            </div>
            <div className="card mb-3 card-faq">
              <div id="headingThree" className="bg-white">
                  <h2 className="ml-2">
                      <a href={() => false} data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2" className="btn btn-link collapsed text-dark collapsible-link cursor-pointer">Berapa hari minimal sewa mobil lepas kunci ?</a>
                  </h2>
              </div>
              <div id="collapse2" aria-labelledby="heading2" data-parent="#accordionExample" className="collapse">
                  <div className="card-body p-3">
                      <p className="accordion-faq">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                  </div>
              </div>
            </div>
            <div className="card mb-3 card-faq">
              <div id="headingThree" className="bg-white">
                  <h2 className="ml-2">
                      <a href={() => false} data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3" className="btn btn-link collapsed text-dark collapsible-link cursor-pointer">Berapa hari sebelumnya sebaiknya booking sewa mobil ?</a>
                  </h2>
              </div>
              <div id="collapse3" aria-labelledby="heading3" data-parent="#accordionExample" className="collapse">
                  <div className="card-body p-3">
                      <p className="">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                  </div>
              </div>
            </div>
            <div className="card mb-3 card-faq">
              <div id="headingThree" className="bg-white">
                  <h2 className="ml-2">
                      <a href={() => false} data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4" className="btn btn-link collapsed text-dark collapsible-link cursor-pointer">Apakah Ada biaya antar-jemput ?</a>
                  </h2>
              </div>
              <div id="collapse4" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
                  <div className="card-body p-3">
                      <p className="">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                  </div>
              </div>
            </div>
            <div className="card mb-3 card-faq">
              <div id="headingThree" className="bg-white">
                  <h2 className="ml-2">
                      <a href={() => false} data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5" className="btn btn-link collapsed text-dark collapsible-link cursor-pointer">Bagaimana jika terjadi kecelakaan ?</a>
                  </h2>
              </div>
              <div id="collapse5" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
                  <div className="card-body p-3">
                      <p className="">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                  </div>
              </div>
            </div>
         </div>
        </div>
      </div>
    </div>
        )
    }
}