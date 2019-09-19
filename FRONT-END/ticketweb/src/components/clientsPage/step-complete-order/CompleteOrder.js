import React, { Component } from 'react';
import Header from './../Header'
import Footer from './../Footer'
import StepOrder from './../step-order/StepOrder'
import BodyComplete from './BodyComplete'
class CompleteOrder extends Component {
    render() {
        return (
            <div>
                <Header />
                <StepOrder color1="green" color2="green" color3="green" s/>
                <BodyComplete />
                <Footer />
            </div>
        );
    }
}

export default CompleteOrder;