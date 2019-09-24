import React from 'react'
import {useDispatch} from 'react-redux'
const TicketItem = ({dataItem,index}) => {
const dispatch = useDispatch()
const editTicketItem= (e) => {
    e.preventDefault()
    dispatch({type: "GET_TICKET_EDIT_ITEM",playload: dataItem})
    dispatch({type: "EDIT_TICKET_ITEM",playload: true})
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
        <button type="button" className="btn btn-warning">
          <i className="fa fa-delete">Delete</i>
        </button>    
      </div>
    </td>
  </tr> 
)
}
export default TicketItem