import React from 'react';
import {useSelector} from 'react-redux'
const BodyComplete = () => {
  const {allOrderInfo} = useSelector(state => ({...state.clientBookReducer}))

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
                    <td className="redText">{allOrderInfo.codeorder}</td>
                  </tr>
                  <tr>
                    <td className="boldText">Loại Vé</td>
                    <td className="redText">{allOrderInfo.user.productType}</td>
                  </tr>
                  <tr>
                    <td className="boldText">Số Lượng</td>
                    <td className="redText">{allOrderInfo.user.productQuantity}</td>
                  </tr>
                  <tr>
                    <td className="boldText">Tên Khách Hàng</td>
                    <td className="redText">{allOrderInfo.user.username}</td>
                  </tr>
                  <tr>
                    <td className="boldText">Email:</td>
                    <td className="redText">{allOrderInfo.user.email}</td>
                  </tr>
                  <tr>
                    <td className="boldText">Số Điện Thoại:</td>
                    <td className="redText">{allOrderInfo.user.phone}</td>
                  </tr>
                </tbody></table>
              <button>Huỷ Đơn Hàng</button>
            </div>
          </div>
        </div>
        );
    }


export default BodyComplete;