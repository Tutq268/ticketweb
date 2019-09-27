import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <header className=" masthead ">
            <div className="headerInfo">
              <NavLink to="/">
              <button className="mainPage">Trang Chủ</button>
              </NavLink>
              <NavLink to="/find-order">
              <button className="checkInfo">Kiểm Tra Thông Tin</button>
              </NavLink>
            </div>
          </header>   
        )
    }
}
