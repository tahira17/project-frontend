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
    
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Welcome to Inventory</h1>
              <br />

              <div className="btn-group" class="btn btn-light">
               
                  <Link className="btn-group" to="additem">
                    Add New Item
                  </Link>
            
                </div>     
              <br />
          
              <hr />
          {inventoryComponent}

            </div>
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
