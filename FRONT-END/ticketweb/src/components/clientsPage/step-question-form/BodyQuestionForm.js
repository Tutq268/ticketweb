import React, { Component } from 'react';

class BodyQuestionForm extends Component {
    render() {
        return (
            <div className="container-fluid bodyCart">
  <div className="container">
    <div className="col-md-12 cartTitle">
      <h3>Your Info</h3>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-8 infoBuyer">
      <div className="col-md-12 userInfo">
        <p>Họ Và Tên: <span>*</span> </p>
        <input type="text" placeholder="Họ Tên" />
      </div>
      <div className="col-md-12 userInfo">
        <p>Địa Chỉ: <span>*</span> </p>
        <input type="text" placeholder="Họ Tên" />
      </div>
      <div className="col-md-6 userInfo">
        <p>Email: <span>*</span></p>
        <input type="email" placeholder="Email" />
      </div>
      <div className="col-md-6 userInfo">
        <p>Số Điện Thoại: <span>*</span></p>
        <input type="text" placeholder="Phone" />
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


        );
    }
}

export default BodyQuestionForm;