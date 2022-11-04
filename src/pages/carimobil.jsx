import React, { Component } from 'react';
import Banner from '../components/banner';
import Card from '../components/card';
import CarsForm from '../components/cars-form';
import Footer from '../components/footer';

export default class CariMobil extends Component {
    render() {
        return(
            <div>
                <Banner/>
                <CarsForm/>
                <Card/>
                <Footer/>
            </div>
        )
    }
}