import React,{useState,useEffect}  from 'react';
import ItemListOrder from './ItemListOrder'
import {useSelector,useDispatch} from 'react-redux'
import {showLoading,SwalAlert} from './../../Alert/SwalAlert'
import axios from 'axios'

const BodyListOrder = () => {
  const {GetListOrder,GetCountOrder} = useSelector(state => ({...state.orderReducer}))
  const dispatch = useDispatch()
  const [page,setPage] = useState(0)
//  const [dataListOrder,setDataListOrder] = useState()
    const [countPage,setCountPage] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      const pageArr =[]
      for(let i=0; i<= GetCountOrder;i++){
        if(i%10 ===0){
          pageArr.push(i/10)
        }
      }
      setCountPage(pageArr)
      setLoading(false)
    },[GetCountOrder])
    const getOrderByPage = async (e)=>{
      e.preventDefault()
     let page = e.target.value
     setPage(page)
    
    try {
     let result = await axios.get(`/admin/get-list-order?page=${page}`)
     if(result.data.result === "ok"){
       dispatch({
         type: "GET_LIST_ORDER",
         playload: result.data.data
       })
     }
     if(result.data.result === "failed"){
       SwalAlert("error",result.data.message)
       return
     }
    } catch (error) {
      SwalAlert("error",error)
       return
    }

    }

    const showDataOrderList = () => (
      <div className="col-xs-12 col-sm-10 col-md-10 payLoad">
      <div className="headTitle">
        <p>Danh Sách Order</p>
      </div>
      <div className="tableListOrder">
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
          {console.log(GetListOrder)}
          {GetListOrder.map((value,key)=>(<ItemListOrder page={page} key={key} index={key} orderInfo = {value}/>))}
        
        </tbody>
      </table>
      </div>
     <div className="pageTable">
       {countPage.map((value,key) => (<button key={key} value={value+1} onClick={(e) => getOrderByPage(e)}>{value+1}</button>))}
       </div>
      
    </div>
    
    )
        return (
           <>
            {loading ? showLoading(true) : showDataOrderList()}
           </>

        );

}

export default BodyListOrder;