import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'

 const TicketInfoItem = ({ticketData}) => {
      const getLink = `/${ticketData.productCode}/step-select-tickets`
      const dispatch = useDispatch()
      const selectTicket = ()=>{
        dispatch({
          type: "GET_CURRENT_TICKET",
          playload: ticketData
        })
      }
        return (
            <div className="card  col-xs-12 col-sm-6 col-md-4">
            <img src={ticketData.productImagePath} className="card-img-top" alt="..." />
            <div className="card-body">
             
              <p className="avalibaleTicker">Số lượng vé còn lại: <span>{ticketData.productCountAvailable}</span></p>
              <NavLink to={getLink}>
              <button onClick={selectTicket} className="btnBookTicket">Đặt Vé</button>
                </NavLink>
             
            </div>
          </div>
        )
    }
export default TicketInfoItem