import React, { Component } from "react";
import { Link } from "react-router-dom";
import InventoryItem from "./InventoryItem";

class inventory extends Component {
  render() {
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
            <InventoryItem/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default inventory;
