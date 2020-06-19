import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">JUCITO </h1>
                <p className="lead">
                  Create your account to add new products into the inventory
                </p>
                <hr />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
