import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getsales} from './../../actions/projectactions'
import { connect } from 'react-redux'
import saleitem from '../../Components/Sales/saleitem'


 class sale extends Component {

componentDidMount() {
    this.props.getsales()
}
    render() {

        const sales = this.props.sales
      const saleComponent = sales.map(sale => (<saleitem key={sale.id} sale={sale} />))

        return (
            <div className= "container" >

            <div className="margins">
            
              <h1 className="display-4 text-center">Welcome to SALES</h1>
              <br />
              <Link to={`/inventory`} className="btn btn-light" style={{marginRight : "10px"}} >
              Back 
          </Link> 
                  <Link className="btn btn-light" to="/sale/addsale">
                    Add Sale
                  </Link>
                 <br />

                  <div className="col-md-8 m-auto">
                  <br />
                  <table class="table table-bordered">
                  <thead>
                  <tr>
                
                  <th>Buyer name</th>
                  <th>Number of item Sold</th>
                  <th>Payment amount</th>
                  <th>Actions</th>
               
                  </tr>
                  </thead>
                
                      {saleComponent}
        
          </table>
          </div>
          </div>
            </div>
          
        )
    }
}


const mapStateToProps = (state) => ({
    sales: state.item.sales
});

export default connect(mapStateToProps,{getsales})(sale)
