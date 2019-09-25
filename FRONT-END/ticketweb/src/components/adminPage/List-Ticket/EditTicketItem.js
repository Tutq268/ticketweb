import React, {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import {SwalAlert} from './../../Alert/SwalAlert'
const EditTicketItem = () =>{

     
     const dispatch = useDispatch()
     const {TICKET_EDIT} = useSelector(state => ({...state.getAllTicket}))
     const [imageReader,setImageReader] = useState(TICKET_EDIT.productImagePath)
     const [productCode,setProductCode] = useState(TICKET_EDIT.productCode)
     const [productType,setProductType] = useState(TICKET_EDIT.productType)
     const [productCount,setproductCount] = useState(TICKET_EDIT.productCount)
     const [productPrice,setproductPrice] = useState(TICKET_EDIT.productPrice)
     const [imageFile,setImageFile] = useState()
     const editFalse = () => {
      dispatch({
        type: "EDIT_TICKET_ITEM",
        playload: false
      })
     }
     const cancleEditTicketItem = (e) =>{
       e.preventDefault()
       editFalse()
       window.location.reload();
     }
     
     const changImageEditTicket = (e) =>{
       e.preventDefault()
       let reader = new FileReader();
       let file = e.target.files[0];
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
           setImageFile(file)
         }
         reader.readAsDataURL(file)   
     }

     const submitEditTicket = (e) => {
         e.preventDefault()
         let regexNumber = new RegExp(/^[0-9]*$/)
         let regexType = new RegExp(/^[s0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/)
         let updateValue = {}
         if(productPrice !== TICKET_EDIT.productPrice){
           if(!regexNumber.test(productPrice)){
            alert("Giá Của Vé Phải Là Số")
            setproductPrice(TICKET_EDIT.productPrice)
            return
           }
           updateValue.productPrice = productPrice
         }
         if(productCount !== TICKET_EDIT.productCount){
          if(!regexNumber.test(productCount)){
           alert("Số Lượng Vé Phải Là Số")
           setproductCount(TICKET_EDIT.productCount)
           return
          }
          updateValue.productCount = productCount
        }
        if(productCode !== TICKET_EDIT.productCode){
          if(!regexType.test(productCode)){
            setProductCode(TICKET_EDIT.productCode)
            return
          }
          updateValue.productCode = productCode
        }
        if(productType !== TICKET_EDIT.productType){
          if(!regexType.test(productType)){
            setProductType(TICKET_EDIT.productType)
            return
          }
          updateValue.productType = productType
        }
        if((Object.getOwnPropertyNames(updateValue).length === 0) && (imageReader === TICKET_EDIT.productImagePath)){
          editFalse()
        }
        if(Object.getOwnPropertyNames(updateValue).length !== 0){
           updateValue._id = TICKET_EDIT._id
           axios.put("/admin/edit-ticket-item",{updateValue}).then(result => {
             if(result.data.result === "ok"){
              SwalAlert("success",result.data.message)
             }
             if(result.data.result === "failed"){
              SwalAlert("error",result.data.message)
             }
           }).catch(err =>{
            SwalAlert("error",err)
           })
        }
        if(imageReader !== TICKET_EDIT.productImagePath){
          var formData = new FormData()
          formData.append("ticketUpdate",imageFile)
          formData.append("ticketId",TICKET_EDIT._id)

          axios.post("/admin/edit-image-ticket",formData,
          {
            headers: { "Content-Type": undefined },
          }).then(resutl =>{
            console.log(resutl)
            if(resutl.data.result === "ok"){
              SwalAlert("success",resutl.data.message)
            }
            if(resutl.data.result === "failed"){
              SwalAlert("error",resutl.data.message)
            }
          }).catch(error=>{
            SwalAlert("error",error)
          })
        }

     }


  return(
    <>
    <div className="col-md-10 payLoad add">
        <div className="headTitle col-md-12">
            <p>Chỉnh Sửa Vé</p>
            </div>
    
    <div className="col-md-12">
      <form className="group">
        <div className="addForm">
          <label className="control-label" htmlFor="product_id">Ticket ID</label> 
          <input placeholder="Mã Vé" onChange = {(e) => setProductCode(e.target.value)} className="form-control input-md" value={productCode}  type="text" />
  
        </div>
        <div className="addForm">
          <label className="control-label" htmlFor="product_id">Hạng Vé</label> 
          <input placeholder="Hạng Vé" onChange = {(e) => setProductType(e.target.value)} className="form-control input-md" value={productType}  type="text" />
        </div>
        <div className="addForm">
          <label className=" control-label" htmlFor="product_id">Số Lượng</label> 
          <input placeholder="Số Lượng " onChange = {(e) => setproductCount(e.target.value)} className="form-control input-md" value={productCount} type="text" />
        </div>
        <div className="addForm">
          <label className=" control-label" htmlFor="product_id">Giá Vé</label> 
          <input  placeholder="Giá Vé" onChange = {(e) => setproductPrice(e.target.value)} className="form-control input-md" value={productPrice} type="text" />
        </div>
        <div className="addForm">
          <label className=" control-label" htmlFor="product_id">Ảnh</label> 
          <div className="chooseImage">
            <img src={imageReader} alt="img ticket" width="150px"  height="150px"/>
            <br></br>
            <br></br>
            Select An Image: <input onChange={(e) => changImageEditTicket(e)} type="file" name="myFile" />
            </div>
        </div>
        <div className="editButton">
          <div className="col-md-12">
                  <div className="col-md-6 editbutton1">
                  <button id="singlebutton" onClick={(e) => submitEditTicket(e)} name="singlebutton" className="btn btn-primary">Chỉnh Sửa</button>
                  </div>
                  <div className="col-md-6 editbutton2">
                  <button onClick={(e) => cancleEditTicketItem(e)}  name="singlebutton" className="btn btn-danger"> Huỷ Bỏ</button>
                  </div>
          </div>
        </div>
      </form> 
    </div>
  </div>
  </>
  )
}
export default EditTicketItem