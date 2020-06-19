import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {deletesale} from '../../actions/projectactions'
import { connect } from 'react-redux';

 class SaleItem extends Component {

    deleteBtnFunc = () => {
        if (window.confirm("ARE YOU SURE ???? ")) {
          this.props.deletesale(this.props.sale.id);
        
        }
      }

    render() {
      const sale = this.props.sale
        return (
         
            <tr>
            <td>{sale.buyername}</td>
            <td>{sale.solditems}</td>
            <td>{sale.amount}</td>
            <td>
            <Link to="/sale" onClick={() => this.deleteBtnFunc()}>
            <li className="btn btn-danger">
            <i>Delete </i>
          </li>
          
          </Link>
            <Link to={`/sale/updatesale/${sale.id}`}>
          
            <li className="btn btn-success" style={{marginLeft : "10px"}}  >
            <i>Update</i>
          </li>
          
            </Link>

            </td>
         </tr>
        )
    }
}

export default connect(null,{deletesale})(SaleItem)
