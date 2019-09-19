import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className=" masthead ">
            <div className="headerInfo">
              <button className="mainPage">Trang Chủ</button>
              <button className="checkInfo">Kiểm Tra Thông Tin</button>
            </div>
          </header>   
        )
    }
}
