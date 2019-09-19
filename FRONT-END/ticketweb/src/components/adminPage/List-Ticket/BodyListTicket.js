import React, { Component } from 'react';

class BodyListTicket extends Component {
    render() {
        return (
            <div className="col-md-10 payLoad">
            <div className="headTitle">
              <p>Thông Tin Vé</p>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Stt</th>
                  <th>Mã Vé</th>
                  <th>Hạng Vé</th>
                  <th>Giá Vé</th>
                  <th>Số Lượng</th>
                  <th>Số Vé Còn Lại</th>
                  <th>Trạng Thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>UID123333</td>
                  <td>Gold Ticket</td>
                  <td>800000</td>
                  <td>1000</td>
                  <td>800</td>
                  <td>
                    <div className="btn-group">
                      <navlink to="/editProduct">
                        <button type="button" className="btn btn-info">
                          <i className="fa fa-edit">Edit</i>
                        </button>
                      </navlink>
                      <button type="button" className="btn btn-warning">
                        <i className="fa fa-delete">Delete</i>
                      </button>    
                    </div>
                  </td>
                </tr>  
              </tbody>
            </table>
          </div>
          
          
        );
    }
}

export default BodyListTicket;