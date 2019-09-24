import React, {useState}  from 'react';
import axios from 'axios'
import {Redirect} from 'react-router'
import {SwalAlert} from './../../Alert/SwalAlert'
import {NavLink} from 'react-router-dom'

const MenuDashboard = () => {
  const width = window.innerWidth
 
     const [logout,setLogout] = useState(false)
      const logoutAdmin = (e) =>{
        e.preventDefault()
          axios.post("/admin/logout").then(resp => {
            if(resp.data.result){
              SwalAlert("success",resp.data.message)
               setLogout(true)
            }
          })
        }

        const getDashboard = () =>(        
            <div className="col-xs-12 col-sm-2 col-md-2 dashBoard">
            <button className="btnHomePage">Dashboard</button>
            <div className="menuDashboard">
              <form>
                <ul>
                  <li>
                  <NavLink to="/admin/add-ticket">
                    <button>         
                      <i className="fa fa-plus" aria-hidden="true" /> <span>Add Ticket</span>
                    </button>
                    </NavLink>
                  </li>
                  <li>
                  <NavLink to="/admin/list-ticket">
                    <button>
                      <i className="fa fa-list" aria-hidden="true" /> <span>List Ticket</span>                     
                    </button>
                    </NavLink>
                  </li>
                  <li>
                  <NavLink to="/admin/list-order">
                    <button >
                    <i className="fa fa-list" aria-hidden="true" /> <span>List Order</span>
                    </button>
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={(e)=> logoutAdmin(e)}>
                      <i className="fa fa-sign-out" aria-hidden="true" /> <span>Log Out</span>
                    </button>
                  </li>
                </ul>
              </form>
            </div> 
          </div>
        )
        
        const menuInPhone = () => (
          <div className="menuWindow">
            <form>
                <ul>
                  <li>
                  <NavLink to="/admin/add-ticket">
                    <button>
                      <i className="fa fa-plus" aria-hidden="true" /> <span>Add Ticket</span>
                    </button>
                    </NavLink>
                  </li>
                  <li>
                  <NavLink to="/admin/list-ticket">
                    <button>
                      <i className="fa fa-list" aria-hidden="true" /> <span>List Ticket</span>
                    </button>
                    </NavLink>
                  </li>
                  <li>
                  <NavLink to="/admin/list-order">
                    <button >
                      <i className="fa fa-list" aria-hidden="true" /> <span>List Order</span>
                    </button>
                    </NavLink>
                  </li>

                  <li>
                    <button onClick={(e)=> logoutAdmin(e)}>
                      <i className="fa fa-sign-out" aria-hidden="true" /> <span>Log Out</span>
                    </button>
                  </li>
                </ul>
              </form>
          </div>
        )
          

        return (
        <>
        {logout ? <Redirect to="/admin" /> : null}
        {(width > 550) ? getDashboard() : menuInPhone()}
        </>
        )

}

export default MenuDashboard;