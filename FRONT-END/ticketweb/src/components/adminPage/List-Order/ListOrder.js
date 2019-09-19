import React, { Component } from 'react';
import MenuDasboard from './../MenuDashboard/MenuDasboard'
import BodyListOrder from './BodyListOrder'
class ListOrder extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div className="row">
                  <MenuDasboard />
                  <BodyListOrder />
                </div>
            </div>
        );
    }
}

export default ListOrder;