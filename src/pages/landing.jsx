import Offcanvas from '../components/offcanvas';
import React, { Component } from 'react';
import Banner from '../components/banner';
import Faq from '../components/faq';
import Layanan from '../components/layanan';
import SewaMobil from '../components/sewamobil';
import Testimonial from '../components/testimonial';
import WhyUs from '../components/whyus';
import Footer from '../components/footer';

export default class Landing extends Component {
    render() {
        return(
            <div>
                <Banner/>
                <Layanan/>
                <WhyUs/>
                <Testimonial/>
                <SewaMobil/>
                <Faq/>
                <Offcanvas/>
                <Footer/>
            </div>
        )
    }
}