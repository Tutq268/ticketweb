import React,{useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {SwalAlert} from './../../Alert/SwalAlert'
const SearchOrder = () =>{
  const [orderCode,setOrderCode] = useState("")
  const dispatch = useDispatch()
    const checkOrder = async (e) =>{
      e.preventDefault()
            try {
            let getAllInfoOrder = await axios.post(`/all-data-order`,{codeOrder:orderCode},{headers: { "Content-Type": undefined }})
            if(getAllInfoOrder.data.result === "ok"){
                dispatch({type: "ALL_ORDER_INFO",playload: getAllInfoOrder.data.data})
                dispatch({type: "STATUS_CHECK",playload: true})
              }
            if(getAllInfoOrder.data.result === "failed"){
               SwalAlert("error",getAllInfoOrder.data.message)
            }
            } catch (error) {
                console.log(error)
            }
    }
    return (
        <div className="col-md-12 ">
        <div className="seacchTicketOrder">
        <input  value={orderCode} onChange={(e) => setOrderCode(e.target.value)} type="text" placeholder="Nhập Mã Đơn Hàng Của Bạn" />
            <button onClick ={(e) => checkOrder(e)}>Tìm Kiếm</button>
        </div>
        </div>
    )
}
export default SearchOrder