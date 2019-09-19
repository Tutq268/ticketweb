import React, { Component } from 'react'
import Header from './../Header'
import Footer from './../Footer'
import StepOrder from './../step-order/StepOrder'
import BodyCart from './BodyCart'
export default class SelectTicket extends Component {
    render() {
        return (
            <div>
                <Header />
                <StepOrder color1="green" />
                <BodyCart />
                <Footer />
            </div>
        )
    }
}
