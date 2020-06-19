import React, { Component } from "react";
import { editsale, getsale } from "../../../actions/projectactions";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

class updatesale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buyername: ' ',
      solditems: ' ',
      amount: ' ',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.sale) {
      this.setState({
        buyername: nextProps.sale.buyername,
        solditems: nextProps.sale.solditems,
        amount: nextProps.sale.amount,
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
  //  alert("in submit handler ")
    const updatedsale = {
      id: this.state.id,
      buyername: this.state.buyername,
      solditems: this.state.solditems,
      amount : this.state.amount
    };

    this.props.editsale(this.props.match.params.id, updatedsale, this.props.history);

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
              <Link to={`/sale`} className="btn btn-light">
                Back
              </Link>
              <br/>
          
              <form onSubmit= {(event)=> this.submitHandler(event)} >
              <div className="col-md-8 m-auto">
                  <input type="text" value={this.state.buyername}  onChange={(event)=> this.changeHandler (event, "buyername")} className="form-control form-control-lg" placeholder="Buyer Name" />
                  
                  </div>
                  <br />
              <div className="col-md-8 m-auto">
                  <input type="text" value={this.state.solditems}  onChange={(event)=> this.changeHandler (event, "solditems")} className="form-control form-control-lg" placeholder="Items Sold" />
                 
                  </div>
                  <br />
                  <div className="col-md-8 m-auto">
                  <input type="text" value={this.state.amount}   onChange={(event)=> this.changeHandler (event, "amount")} className="form-control form-control-lg" placeholder="amount" />
             
                  </div>
                  <br />
             <div className="col-md-4 m-auto">
             <input type="submit" className="btn btn-light btn-block mt-4" value="Update Sale" />
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
  sale: state.sale.salee,
});

export default connect(mapStateToProps, { getsale, editsale })(updatesale);
