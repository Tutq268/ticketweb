import React, { useState } from 'react';
import axios from 'axios'
import {SwalAlert} from './../../Alert/SwalAlert'
function BodyAddTicket() {
  let code = React.createRef();
  let type = React.createRef();
   let price = React.createRef();
  let count = React.createRef();
  let file = React.createRef();

   let defaultSrcImage = "./../images/logo.jpg"
  const [imageReader,setImageReader] = useState(defaultSrcImage)
  // const [ticketInfo,setTicketInfo] = useState({})


  // add ảnh vào thẻ img
  const setDefaultValie = () =>{
    code.value = ""
    type.value = ""
    price.value = ""
    count.value = ""
    setImageReader(defaultSrcImage)
  }
      const handleGetImage = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file)
        if (file === undefined){
          return
        }
        let match = ["image/png","image/jpg","image/jpeg"]
        let limit = 1048576 * 2
        let checkTypeImage = match.some(item => item === file.type)
        let limitSizeImage = file.size
        if(limit < limitSizeImage){
          alert("Vượt quá kích thước cho phép")
          return
        }
       if(!checkTypeImage){
          alert("Định Dạng File Không Phải Là Ảnh")
          return
        }
       
          reader.onloadend = () => {
            setImageReader(reader.result);
          }
          reader.readAsDataURL(file)
        }

   // đẩy thông tin lên server
            const getInfoTicket = (e) =>{
              e.preventDefault()

            let imageFile = file.files[0]
            console.log(imageFile)
            let productCode = code.value
            let productType = type.value
            let productPrice = price.value
            let productCount = count.value
            let regexNumber = new RegExp(/^[0-9]*$/)
            let regexType = new RegExp(/^[s0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/)
            if(productCode === "" || productType === "" || productPrice === "" || productCount === "" || imageReader === defaultSrcImage){
              alert("Vui Lòng Điền Hết Thông Tin")
              return
            }
            if(!regexNumber.test(productPrice)){
              alert("Giá Của Vé Phải Là Số")
              price.value = ""
              return
            }
            if(!regexNumber.test(productCount)){
              alert("Số Lượng Vé Phải Là Số")
              count.value =""
              return
            }
            if(!regexType.test(productType)){
              alert("Kiểu Vé không được chứa kí tự đặc biệt")
              type.value = ""
              return
            }

            var formData = new FormData()
            formData.append("ticket",imageFile)
            formData.append("productCode",productCode)
            formData.append("productType",productType)
            formData.append("productPrice",productPrice)
            formData.append("productCount",productCount)
            axios.post("/admin/add-new-ticket"
                  ,formData,
                    {
                      headers: { "Content-Type": undefined },
                    }).then(resp => {
                      if(resp.data.result === "failed"){
                        SwalAlert('error',resp.data.message)
                        setDefaultValie()
                      }
                      if(resp.data.result === "ok"){
                        SwalAlert("success",resp.data.message)
                        setDefaultValie()
                      }
                     
                      
                    }).catch(error =>{
                      console.log("loi: " + error)
                    })
            }


      return (
            <div className="col-md-10 payLoad add">
  <div className="headTitle">
    <p>Thêm Vé</p>
  </div>
  <div className="col-md-12">
    <form className="group">
      <div className="addForm">
        <label className="control-label" htmlFor="product_id">Ticket ID</label> 
        <input  ref={input => code = input} placeholder="Mã Vé" className="form-control input-md" required type="text" />

      </div>
      <div className="addForm">
        <label className="control-label" htmlFor="product_id">Hạng Vé</label> 
        <input placeholder="Hạng Vé" ref={input => type = input} className="form-control input-md" required type="text" />
      </div>
      <div className="addForm">
        <label className=" control-label" htmlFor="product_id">Số Lượng</label> 
        <input placeholder="Số Lượng " ref={input => count = input} className="form-control input-md" required type="text" />
      </div>
      <div className="addForm">
        <label className=" control-label" htmlFor="product_id">Giá Vé</label> 
        <input  placeholder="Giá Vé" ref={input => price = input} className="form-control input-md" required type="text" />
      </div>
      <div className="addForm">
        <label className=" control-label" htmlFor="product_id">Ảnh</label> 
        <div className="chooseImage">
          <img src={imageReader} alt="img ticket" width="150px" height="150px"/>
          <br></br>
          <br></br>
          Select An Image: <input ref={input => file = input} onChange = {(e)=>handleGetImage(e)} type="file" name="myFile" />
          </div>
      </div>
      <div className="addForm">
        <div className="col-md-12">
          <button id="singlebutton" onClick={(e) =>getInfoTicket(e)} name="singlebutton" className="btn btn-primary">Thêm Vé</button>
        </div>
      </div>
    </form> 
  </div>
</div>


        );

}

export default BodyAddTicket;