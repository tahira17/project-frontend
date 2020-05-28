import React, { Component } from "react";
import { Link } from "react-router-dom";
import {deleteitems} from "../../actions/projectactions";
import { connect } from "react-redux";

class InventoryItem extends Component {
  deleteBtnFunc = () => {
    if (window.confirm("ARE YOU SURE ???? ")) {
      this.props.deleteitems(this.props.item.id);
    }
  };

  render() {
    const item = this.props.item;

    return (
      <div>
        <div className="container-fluid">
          <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6">
                <h3>Drink NO : {item.id} </h3>
                <h4>Drink Name :{item.name}</h4>
                <p>Drink Ingredients: {item.ingredients}</p>
                <p>Drink Price: {item.price}</p>
                <p>Drink Size: {item.size}</p>
              </div>

              <div className="col-md-4 col-12 d-lg-block">
                <ul className="list-group">
                  <a href="transactions.html">
                    <li className="list-group-item board text-success">
                      <i className="fa fa-flag-checkered pr-1"> View Items </i>
                    </li>
                  </a>
                  <a href="walletForm.html">
                    <li className="list-group-item update text-info">
                      <i className="fa fa-edit pr-1"> Update Info</i>
                    </li>
                  </a>
                  <Link to="/inventory" onClick={() => this.deleteBtnFunc()}>
                    <li className="list-group-item delete text-danger">
                      <i className="fa fa-minus-circle pr-1"> Delete Item</i>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteitems })(InventoryItem);
