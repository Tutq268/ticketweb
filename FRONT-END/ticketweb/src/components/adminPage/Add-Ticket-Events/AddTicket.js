import React, { Component } from 'react';
import MenuDashboard from './../MenuDashboard/MenuDasboard'
import BodyAddTicket from './BodyAddTicket'
class AddTicket extends Component {
    render() {
        return (
            <div className="container-fluid ">
                 <div className="row row-no-padding ">
                <MenuDashboard />
                <BodyAddTicket />
                </div>
                
            </div>
            
        );
    }
}

export default AddTicket;