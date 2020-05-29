import React, { Component } from "react";
import { Link } from "react-router-dom";
import InventoryItem from "./InventoryItem";

import {connect} from 'react-redux'
import {getitems} from '../../actions/projectactions'


class inventory extends Component {

  componentDidMount(){
    this.props.getitems()
  
    }
    
  render() {

    const items = this.props.items
const inventoryComponent = items.map(item => (<InventoryItem key={item.id} item = {item}/>))

    return (
    
      <div className= "container" >

            <div className="margins">
            
              <h1 className="display-4 text-center">Welcome to Inventory</h1>
              <br />
               
                  <Link className="btn btn-light" to="additem">
                    Add New Item
                  </Link>
                 <br />

                  <div className="col-md-8 m-auto">
                  <br />
                  <table class="table table-bordered">
                  <thead>
                  <tr>
                  <th>Drink Name</th>
                  <th> Price</th>
                  <th> Ingredients</th>
                  <th> Size</th>
                  <th>Action</th>
                  </tr>
                  </thead>
                  {inventoryComponent}
              
          </table>
          </div>
          </div>
            </div>
          
      
  
    );
  }
}

const mapStateToProps = (state) => ({

  items : state.item.items
  })

export default connect(mapStateToProps,{getitems}) (inventory);
