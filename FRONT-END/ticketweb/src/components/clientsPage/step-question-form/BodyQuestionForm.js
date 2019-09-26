import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios'
// import {NavLink} from 'react-router-dom'
const BodyQuestionForm = () => {
  const {ticketCurrent,countTicket} = useSelector(state =>({...state.clientBookReducer}))
  // const linkTo =  `/${ticketCurrent.productCode}/step-complete-order`
   const [username,setUsername] = useState("")
   const [address,setAddress] = useState("")
   const [email,setEmail] = useState("")
   const [phone,setPhone] = useState("")
  let totalPriceOrder = ((+ticketCurrent.productPrice)*(+countTicket)).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  
   const nexToCompleteOrder = async (e) =>{
    let regexUsername = new RegExp(/^[s0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/)
    let regexNumber = new RegExp(/^(0)[0-9]{9,10}$/)
    let regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    if(username === "" || address === "" || email === "" || phone === ""){
      alert("vui Lòng Điền Đẩy Đủ Thông Tin")
      return
    }
    else if(!regexNumber.test(phone)){
     alert("Vui Lòng Nhập Đúng Số Điện Thoại")
     setPhone("")
     return
    }
    else if(!regexEmail.test(email)){
      alert("Vui Lòng Nhập Đúng Email")
      setEmail("")
      return
    }
    else if(!regexUsername.test(username)){
      alert("Vui Lòng Nhập Đúng Tên")
      setUsername("")
      return
    }
    else {
      let infoClient = {
        username: username,
        address: address,
        email: email,
        phone: phone,
        productCode: ticketCurrent.productCode,
        productQuantity: countTicket,
        productPrice : +(ticketCurrent.productPrice) * (+countTicket)
      }
      try {
        let createOrderTicket = await axios.post("/create-order",infoClient,{
          headers: { "Content-Type": undefined }
        })
        console.log(createOrderTicket)
      } catch (error) {
        console.log(error)
      }
    }
   }

        return (
        <div className="container-fluid bodyCart">
  <div className="container">
    <div className="col-md-12 cartTitle">
      <h3>Your Info</h3>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-8 infoBuyer">
      <div className="col-md-12 userInfo">
        <p>Họ Và Tên: <span>*</span> </p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Họ Tên" />
      </div>
      <div className="col-md-12 userInfo">
        <p>Địa Chỉ: <span>*</span> </p>
        <input  value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Họ Tên" />
      </div>
      <div className="col-md-6 userInfo">
        <p>Email: <span>*</span></p>
        <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
      </div>
      <div className="col-md-6 userInfo">
        <p>Số Điện Thoại: <span>*</span></p>
        <input  value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" />
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
          <p style={{float: 'left'}}>{ticketCurrent.productType}</p>
          <p style={{float: 'right'}}>{countTicket}</p>
        </div>
        <div>
        </div>
      </div>
      <div className="col-md-12 totalCount">
        <p style={{float: 'left'}}>Tổng Cộng</p>
        <p style={{float: 'right'}}>{totalPriceOrder} VND</p>
      </div>
      <button onClick={(e) => nexToCompleteOrder(e)} className="col-md-12 btnContinueBook">Tiếp Tục</button>
    </div>
  </div>
</div>


        );
    }


export default BodyQuestionForm;