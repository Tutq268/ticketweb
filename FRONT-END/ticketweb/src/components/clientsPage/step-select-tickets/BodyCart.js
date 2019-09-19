import React, { Component } from 'react'

export default class BodyCart extends Component {
    render() {
        return (
            <div className="container-fluid bodyCart">
            <div className="container">
              <div className="col-md-12 cartTitle">
                <h3>Your cart</h3>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 leftInfo">
                <div className="col-md-12 desTicket">
                  <div className="col-xs-4 col-md-6 "><p>Loại Vé</p></div>
                  <div className=" col-xs-4 col-md-3 "><p>Giá Vé</p></div>
                  <div className=" col-xs-4 col-md-3 "><p>Số Lượng</p></div>
                </div>
                <div className="col-md-12 selectTicket">
                  <div className=" col-xs-4 col-md-6 ">Vé Xem Hạng Vàng</div>
                  <div className="  col-xs-4 col-md-3 ">2000000</div>
                  <div className=" col-xs-4  col-md-3 countTiket">
                    <button>-</button>
                    <form>
                      <input type="text" defaultValue={1} />
                    </form>
                    <button>+</button>
                  </div>
                </div>
                <div className="col-md-12 infoTicket ">
                  <div className="col-md-4">
                    <img src="./../images/ticketDiamon.png" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <p>Quý khách vui long đến đúng giờ và ngồi đúng vị trí ghi trên vé</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 infoBookTicket">
                <div className="col-md-12 desTicket">
                  <p>THÔNG TIN ĐẶT VÉ</p>
                </div>
                <br />
                <div className="col-md-12 infoTicketBook">
                  <div className="title">
                    <p style={{float: 'left'}}>Loại Vé</p>
                    <p style={{float: 'right'}}>Số Lượng</p>
                  </div>
                  <div className="info">
                    <p style={{float: 'left'}}>Gold Ticket</p>
                    <p style={{float: 'right'}}>1</p>
                  </div>
                  <div>
                  </div>
                </div>
                <div className="col-md-12 totalCount">
                  <p style={{float: 'left'}}>Tổng Cộng</p>
                  <p style={{float: 'right'}}>0 VND</p>
                </div>
                <button className="col-md-12 btnContinueBook">Tiếp Tục</button>
              </div>
            </div>
          </div>
          
          
        )
    }
}
