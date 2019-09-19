import React, { Component } from 'react';

class MenuDashboard extends Component {
    render() {
        return (
            <div className="col-md-2 dashBoard">
            <button className="btnHomePage">Dashboard</button>
            <div className="menuDashboard">
              <form>
                <ul>
                  <li>
                    <button>
                      <i className="fa fa-plus" aria-hidden="true" /> <span>Add Ticket</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <i className="fa fa-list" aria-hidden="true" /> <span>List Ticket</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <i className="fa fa-list" aria-hidden="true" /> <span>List Order</span>
                    </button>
                  </li>
                </ul>
              </form>
            </div> 
          </div>
          
          
        );
    }
}

export default MenuDashboard;