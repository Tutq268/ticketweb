import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import TicketItem from './TicketItem'
import EditTicketItem from './EditTicketItem'
const BodyListTicket = () => {
  const { ALL_TICKET,isEditTicket } = useSelector(state => ({...state.getAllTicket}));
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: "EDIT_TICKET_ITEM",playload: false
    })
  },[dispatch])
  const showAllTicket = () => (
    <div className="col-xs-12 col-sm-10 col-md-10 payLoad">
    <div className="headTitle">
      <p>Thông Tin Vé</p>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Stt</th>
          <th>Mã Vé</th>
          <th>Hạng Vé</th>
          <th>Giá Vé</th>
          <th>Số Lượng</th>
          <th>Số Vé Còn Lại</th>
          <th>Trạng Thái</th>
        </tr>
      </thead>
      <tbody>
         {ALL_TICKET.map((value,key) => (<TicketItem dataItem = {value} key={key} index={key}/>))}
      </tbody>
    </table>
  </div>
  )
 
  
        return (
           <>
             {isEditTicket ? <EditTicketItem /> : showAllTicket()}
           </>
          
        );
    }


export default BodyListTicket;