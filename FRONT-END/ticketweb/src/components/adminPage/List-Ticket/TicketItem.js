import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'

import {SwalAlert} from './../../Alert/SwalAlert'


const TicketItem = ({dataItem,index}) => {
  const { ALL_TICKET } = useSelector(state => ({...state.getAllTicket}));
const dispatch = useDispatch()
const editTicketItem= (e) => {
    e.preventDefault()
    dispatch({type: "GET_TICKET_EDIT_ITEM",playload: dataItem})
    dispatch({type: "EDIT_TICKET_ITEM",playload: true})
}

const deleteTicketItem =  (e) => {
  e.preventDefault()


  Swal.fire({
    title: 'Are you sure?',
    text: "Bạn Có Chắc Muốn Xoá Vé Này",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Delete'
  }).then(async () => {
    try {
      let result = await axios.delete(`/admin/delete-ticket-item/${dataItem._id}`)
       if(result.data.result === "ok"){
        SwalAlert("success",result.data.message)
        let newAllTicket = ALL_TICKET.filter(ticket => ticket._id !== dataItem._id)
        dispatch({type: "GET_ALL_TICKET",playload: newAllTicket})
       }
       if(result.data.result === "failed"){
         SwalAlert("error",result.data.message)
         return
       }
    } catch (error) {
      SwalAlert("error",error)
      return
    }
  })
 

}

return (
    <tr>
    <td>{index + 1}</td>
    <td>{dataItem.productCode}</td>
    <td>{dataItem.productType}</td>
    <td>{dataItem.productPrice}</td>
    <td>{dataItem.productCount}</td>
    <td>{dataItem.productCountAvailable}</td>
    <td>
      <div className="btn-group">
          <button type="button" onClick={(e) =>editTicketItem(e)} className="btn btn-info">
            <i className="fa fa-edit">Edit</i>
          </button>
        <button onClick={(e) => deleteTicketItem(e)} type="button" className="btn btn-warning">
          <i className="fa fa-delete">Delete</i>
        </button>    
      </div>
    </td>
  </tr> 
)
}
export default TicketItem