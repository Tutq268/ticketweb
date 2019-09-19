import React, { Component } from 'react';

class BodyAddTicket extends Component {
    render() {
        return (
            <div className="col-md-10 payLoad add">
  <div className="headTitle">
    <p>Thêm Vé</p>
  </div>
  <div className="col-md-12">
    <form className="group">
      <div className="addForm">
        <label className="control-label" htmlFor="product_id">Ticket ID</label> 
        <input id="product_id" name="product_id" placeholder="PRODUCT ID" className="form-control input-md" required type="text" />
      </div>
      <div className="addForm">
        <label className="control-label" htmlFor="product_id">Hạng Vé</label> 
        <input id="product_id" name="product_id" placeholder="PRODUCT ID" className="form-control input-md" required type="text" />
      </div>
      <div className="addForm">
        <label className=" control-label" htmlFor="product_id">Số Lượng</label> 
        <input id="product_id" name="product_id" placeholder="PRODUCT ID" className="form-control input-md" required type="text" />
      </div>
      <div className="addForm">
        <label className=" control-label" htmlFor="product_id">Ảnh</label> 
        <div className="chooseImage">Select An Image: <input type="file" name="myFile" /></div>
      </div>
      <div className="addForm">
        <div className="col-md-12">
          <button id="singlebutton" name="singlebutton" className="btn btn-primary">Thêm Vé</button>
        </div>
      </div>
    </form> 
  </div>
</div>


        );
    }
}

export default BodyAddTicket;