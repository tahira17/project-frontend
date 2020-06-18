import React, { Component } from "react";
import { editsale, getsale } from "../../../actions/projectactions";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

class updatesale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buyername: " ",
      solditems: " ",
      amount: " ",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.sale) {
      this.setState({
        buyername: nextProps.item.buyername,
        solditems: nextProps.item.solditems,
        amount: nextProps.item.amount,
      });
    }
  }

  componentDidMount() {
    this.props.getsale(this.props.match.params.id);
  }

  changeHandler = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  submitHandler = (event) => {
    const updatesale = {
      id: this.state.id,
      buyername: this.state.buyername,
      solditems: this.state.solditems,
    };

    this.props.updatesale(this.state.id, updatesale, this.props.history);

    event.preventDefault();
  };

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <h5 className="display-4 text-center">Update this Sale</h5>
              <hr />
              <Link to={`/inventory`} className="btn btn-light">
                Back
              </Link>
              <form onSubmit={(event) => this.submitHandler(event)}>
                <div className="col-md-8 m-auto">
                  <input
                    type="text"
                    value={this.state.buyername}
                    onChange={(event) => this.changeHandler(event, "buyername")}
                    placeholder="Buyer Name"
                  />
                </div>
                <div className="col-md-8 m-auto">
                  <input
                    type="text"
                    value={this.state.solditems}
                    onChange={(event) => this.changeHandler(event, "solditems")}
                    placeholder="Sold Items"
                  />
                 
                </div>
                <div className="col-md-8 m-auto">
                  <textarea
                    value={this.state.amount}
                    onChange={(event) =>
                      this.changeHandler(event, "amount")
                    }
                   
                    placeholder="Amount"
                  ></textarea>
                  
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  sale: state.sale.sale,
});

export default connect(mapStateToProps, { getsale, editsale })(updatesale);
