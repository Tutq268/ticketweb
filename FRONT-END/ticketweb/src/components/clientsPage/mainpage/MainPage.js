import React, { Component } from 'react'
import Header from './../Header'
import Footer from './../Footer'
import TicketInfoItem from './TicketInfoItem'
export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="titleHead">
                    <h1>Everything you need to sell tickets to your event online</h1>
                </div>
                <div className="container booktickets">
                <TicketInfoItem />
                <TicketInfoItem />
                <TicketInfoItem />
                <TicketInfoItem />
                <TicketInfoItem />
                <TicketInfoItem />
                </div>
                
                <Footer />
            </div>
        )
    }
}
