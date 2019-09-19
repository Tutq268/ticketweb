import React, { Component } from 'react';

class BodyComplete extends Component {
    render() {
        return (
            <div>
  <div className="col-md-12 ">
    <div className="notifComplete">
      <img src="./../images/completeIcon.png" alt="completion icon" />
      <p>Cảm Ơn Bạn Đã Đặt Vé. Vui Lòng Kiểm Tra Lại Thông Tin Bên Dưới</p>
    </div>
  </div>
  <div className="col-md-12">
    <div id="checkInfoOrder">
      <table>
        <tbody><tr>
            <td className="boldText">Mã Đặt Hàng</td>
            <td className="redText">UID123456</td>
          </tr>
          <tr>
            <td className="boldText">Loại Vé</td>
            <td className="redText">Gold Ticket</td>
          </tr>
          <tr>
            <td className="boldText">Tên Khách Hàng</td>
            <td className="redText">Trần Quang Tú</td>
          </tr>
          <tr>
            <td className="boldText">Email:</td>
            <td className="redText">tutran00831@gmiail.com</td>
          </tr>
          <tr>
            <td className="boldText">Số Điện Thoại:</td>
            <td className="redText">0966358495</td>
          </tr>
        </tbody></table>
      <button>Chỉnh Sửa</button>
    </div>
  </div>
</div>


        );
    }
}

export default BodyComplete;