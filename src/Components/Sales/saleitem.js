import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import { deletesale } from './../../actions/projectactions'
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
      alert("hyhyhy")
        let id = this.props.itemid;
        let Sid =this.props.sale.id;
         const sale = this.props.sale

         alert(this.props.sale.buyername)

        return (
            <tr>
                  <td>{sale.buyername}</td>
                  <td>{sale.solditems}</td>
                  <td>{sale.amount}</td>
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
        );
    }
}

export default  connect(null , {deletesale})(saleitem)
