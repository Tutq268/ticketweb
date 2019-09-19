import React, { Component } from 'react'
import MenuDashboard from './../MenuDashboard/MenuDasboard'
import BodyListTicket from './BodyListTicket'
export default class ListTicket extends Component {
    render() {
        return (
            <div className="container-fluid ">
            <div className="row">
              <MenuDashboard />
              <BodyListTicket />
            </div>
             </div>
        )
    }
}
