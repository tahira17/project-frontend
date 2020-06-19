import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { getsales } from '../../actions/projectactions'
import SalesItem from '../Sales/SaleItem'

 class AllSales extends Component {

    componentDidMount(){
        this.props.getsales()
        }

    render() {

        const sales = this.props.sales
        const salelistComponent = sales.map(sale => (<SalesItem key={sale.id} sale = {sale}/>))
            

        return (
         
          <div className= "container" >
    
                <div className="margins">
                
                  <h1 className="display-4 text-center">Welcome to sales</h1>
                  <br />
                
                  <Link to={`/inventory`} className="btn btn-light" style={{marginRight : "10px"}}  >
                  Back 
              </Link>
                  
                      <Link className="btn btn-light" to="/sale/addsale">
                        Add New sale
                      </Link>
    
                     <br />
    
                      <div className="col-md-8 m-auto">
                      <br />
                      <table class="table table-bordered">
                      <thead>
                      <tr>
                 
                      <th> buyer</th>
                      <th> itms</th>
                      <th> amount</th>
                      <th>Action</th>
                      </tr>
                      </thead>
                      {salelistComponent}
                  
              </table>
              </div>
              </div>
                </div>
              
        )
    }
}

const mapStateToProps = (state) => ({
    sales : state.sale.sales
    })

export default connect(mapStateToProps, {getsales})(AllSales)
