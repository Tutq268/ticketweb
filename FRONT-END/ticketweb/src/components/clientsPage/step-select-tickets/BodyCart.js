import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
const BodyCart = () => {
  const {ticketCurrent,countTicket} = useSelector(state =>({...state.clientBookReducer}))
  const [count,setCount] = useState(countTicket)
  const linkTo = `/${ticketCurrent.productCode}/step-question-form`
  const dispatch = useDispatch()
  const increaseCount = (e) => {
   e.preventDefault()
   setCount(+count + 1)
  }
  const decreaseCount = (e) =>{
    e.preventDefault()
    setCount(+count -1)
  }
  const nextToQuestionForm = () => {
    dispatch({
      type: "COUNT_TICKET",
      playload: count
    })
  }
        return (
            <div className="container-fluid bodyCart">
            <div className="container">
              <div className="col-md-12 cartTitle">
                <h3>Your cart</h3>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 leftInfo">
                <div className="col-md-12 desTicket">
                  <div className="col-xs-4 col-md-6 "><p>Loại Vé</p></div>
                  <div className=" col-xs-4 col-md-3 "><p>Giá Vé</p></div>
                  <div className=" col-xs-4 col-md-3 "><p>Số Lượng</p></div>
                </div>
                <div className="col-md-12 selectTicket">
                  <div className=" col-xs-4 col-md-6 ">{ticketCurrent.productType}</div>
                  <div className="  col-xs-4 col-md-3 ">{(+ticketCurrent.productPrice).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
                  <div className=" col-xs-4  col-md-3 countTiket">
                    <button onClick = {(e)=> decreaseCount(e)}>-</button>
                    <form>
                      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
                    </form>
                    <button onClick={(e) => increaseCount(e)}>+</button>
                  </div>
                </div>
                <div className="col-md-12 infoTicket ">
                  <div className="col-md-6">
                    <img src={ticketCurrent.productImagePath} alt=""/>
                  </div>
                  <div className="col-md-6">
                    <p>Quý khách vui long đến đúng giờ và ngồi đúng vị trí ghi trên vé</p>
                  </div>
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
                    <p style={{float: 'right'}}>{count}</p>
                  </div>
                  <div>
                  </div>
                </div>
                <div className="col-md-12 totalCount">
                  <p style={{float: 'left'}}>Tổng Cộng</p>
                  <p style={{float: 'right'}}>{(+count*ticketCurrent.productPrice).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')} VND</p>
                </div>
                <NavLink to={linkTo}>
                  <button className="col-md-12 btnContinueBook" onClick={nextToQuestionForm}>Tiếp Tục</button>

                </NavLink>
              </div>
            </div>
          </div>
          
          
        )
    }
export default BodyCart
