import React, { Component } from 'react'

export default class TicketInfoItem extends Component {
    render() {
        return (
            <div className="card  col-xs-12 col-sm-6 col-md-4">
            <img src="./images/ticketDiamon.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="avalibaleTicker">Số lượng vé còn lại: <span>200</span></p>
              <button className="btnBookTicket">Đặt Vé</button>
            </div>
          </div>


        )
    }
}
