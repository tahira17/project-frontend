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
      
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.size}</td>
                  <td>
                  <Link to="/inventory" onClick={() => this.deleteBtnFunc()}>
                  <li className="btn btn-danger">
                  <i>Delete </i>
                </li>
                
                </Link>
                  <Link to={`/updateitem/${item.id}`}>
                
                  <li className="btn btn-success" style={{marginLeft : "10px"}}  >
                  <i>Update</i>
                </li>
                
                  </Link>

                  </td>
               </tr>
    );
  }
}

export default connect(null, { deleteitems })(InventoryItem);
