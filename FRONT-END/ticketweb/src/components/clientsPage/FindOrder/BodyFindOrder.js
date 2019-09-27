import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import {SwalAlert} from './../../Alert/SwalAlert'

const BodyFindOrder = () =>{
  const {allOrderInfo} = useSelector(state => ({...state.clientBookReducer}))
  const dispatch = useDispatch()
  let orderInfo = {}
  if(Object.getOwnPropertyNames(allOrderInfo).length !== 0){
     orderInfo = allOrderInfo.user
  }

  const removeTicket = (e) =>{
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "Bạn Có Chắc Muốn Huỷ Đơn Hàng Này",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then(async () => {
      try {
       let result = await axios.delete(`/remove-order-ticket/${allOrderInfo._id}`)
       console.log(result)
       if(result.data.result === "ok"){
         SwalAlert("success",result.data.message)
         dispatch({type: "STATUS_CHECK",playload: false})

       }
       if(result.data.result === "failed"){
         SwalAlert("error",result.data.message)
       }
      
      } catch (error) {
        
      }
  })
}
  return (
          <div className="col-md-12">
          <div id="checkInfoOrder">
            <table>
              <tbody><tr>
                  <td className="boldText">Mã Đặt Hàng</td>
                  <td className="redText">{allOrderInfo.codeorder}</td>
                </tr>
                <tr>
                  <td className="boldText">Loại Vé</td>
                  <td className="redText">{orderInfo.productType}</td>
                </tr>
                <tr>
                  <td className="boldText">Số Lượng</td>
                  <td className="redText">{orderInfo.productQuantity}</td>
                </tr>
                <tr>
                    <td className="boldText">Tổng Tiền</td>
                    <td className="redText">{orderInfo.productPrice}</td>
                  </tr>
                <tr>
                  <td className="boldText">Tên Khách Hàng</td>
                  <td className="redText">{orderInfo.username}</td>
                </tr>
                <tr>
                  <td className="boldText">Email:</td>
                  <td className="redText">{orderInfo.email}</td>
                </tr>
                <tr>
                  <td className="boldText">Số Điện Thoại:</td>
                  <td className="redText">{orderInfo.phone}</td>
                </tr>
              </tbody></table>
            <button onClick ={(e) => removeTicket(e)}>Huỷ Đơn Hàng</button>
          </div>
        </div>
  )
}
export default BodyFindOrder