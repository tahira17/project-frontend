import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { getsales, getitem } from './../../actions/projectActions'
import { connect } from 'react-redux'
import saleitem from './saleitem';



 class sale extends Component {

constructor(props) {
    super(props)

    this.state = {
         //all the attributes of item and sales = ' '
    }
}


componentDidMount() {
    this.props.getsales(this.props.match.params.id);
    this.props.getitem(this.props.match.params.id)
}



    render() {


        let id = this.props.match.params.id;

        const sales = this.props.sales

        const SalesComponent = sales.map(sale =>
            (<saleitem key={sale.id} sale={sale} item_id={id} />))
       

        return (
            <div className= "container" >

            <div className="margins">
            
              <h1 className="display-4 text-center">Welcome to SALES</h1>
              <br />
               
                  <Link className="btn btn-light" to="addsale">
                    Add New Sale
                  </Link>
                 <br />

                  <div className="col-md-8 m-auto">
                  <br />
                  <table class="table table-bordered">
                  <thead>
                  <tr>
                
                  <th>Sold to:</th>
                  <th>Item Sold</th>

                  </tr>
                  </thead>
                  {SalesComponent}
              
          </table>
          </div>
          </div>
            </div>
          
        )
    }
}

export default sale
