import React, { Component } from 'react';

class BodyListOrder extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-10 col-md-10 payLoad">
  <div className="headTitle">
    <p>Danh Sách Order</p>
  </div>
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>Stt</th>
        <th>Tên Khách Hàng</th>
        <th>Địa Chỉ</th>
        <th>Số Điện Thoại</th>
        <th>Mã Đơn Hàng</th>
        <th>Tiền</th>
        <th>Hạng Vé</th>
        <th>Trạng Thái Vận Chuyển</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Trần Quang Tú</td>
        <td>Bắc Từ Liêm  - Hà Nội</td>
        <td>0988917065</td>
        <td>d101</td>
        <td>10.000.000</td>
        <td>Gold Ticket</td>
        <td>Đã Nhận</td>
      </tr>  
    </tbody>
  </table>
</div>


        );
    }
}

export default BodyListOrder;