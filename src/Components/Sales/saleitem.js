import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import { deletesale } from './../../actions/projectActions'
import {connect} from 'react-redux'

 class saleitem extends Component {

    deleteBtnClick= () =>
    {

        if(window.confirm("Are you sure?????"))
        {
            this.props.deletesale(this.props.item_id,this.props.sale.id);
        }
    
    }

    render() {
        let id = this.props.item_id;
        let Sid =this.props.sale.id;
         const sale = this.props.sale
        return (
            <tr>
                  <td>{sale.soldto}</td>
                  <td>{sale.itemsold}</td>
                  <td>
                  <Link to={`/sale/${id}`} onClick={() => this.deleteBtnFunc()}>
                  <li className="btn btn-danger">
                  <i>Delete </i>
                </li>
                
                </Link>
                  <Link to={`/sale/updatesale/${id}/${Sid}`}>
                
                  <li className="btn btn-success" style={{marginLeft : "10px"}}  >
                  <i>Update</i>
                </li>
                  </Link>
                  </td>
               </tr>
        )
    }
}

export default saleitem
