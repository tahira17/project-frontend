import React, { Component } from "react";
import classnames from "classnames";
import { updateitem, getitem } from "../../../actions/projectactions";
import { connect } from "react-redux";

class UpdateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: " ",
      name: " ",
      ingredients: " ",
      price: " ",
      size: " ",
      errors: " ",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.item) {
      this.setState({
        id: nextProps.item.id,
        name: nextProps.item.name,
        ingredients: nextProps.item.ingredients,
        price: nextProps.item.price,
        size: nextProps.item.size,
      });
    }
  }

  componentDidMount() {
    this.props.getitem(this.props.match.params.id);
  }

  changeHandler = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  submitHandler = (event) => {
    const updateitem = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      ingredients: this.state.ingredients,
      size: this.state.size,
    };

    this.props.updateitem(this.state.id, updateitem, this.props.history);

    event.preventDefault();
  };

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <h5 className="display-4 text-center">Update this item</h5>
              <hr />
              <form onSubmit={(event) => this.submitHandler(event)}>
                <div className="col-md-8 m-auto">
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={(event) => this.changeHandler(event, "name")}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": this.state.errors.name,
                    })}
                    placeholder="Drink Name"
                  />
                  <p className="text-danger ">{this.state.errors.name} </p>
                </div>
                <div className="col-md-8 m-auto">
                  <input
                    type="text"
                    value={this.state.price}
                    onChange={(event) => this.changeHandler(event, "price")}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": this.state.errors.price,
                    })}
                    placeholder="Drink  Price"
                  />
                  <p className="text-danger ">{this.state.errors.price} </p>
                </div>
                <div className="col-md-8 m-auto">
                  <textarea
                    value={this.state.ingredients}
                    onChange={(event) =>
                      this.changeHandler(event, "ingredients")
                    }
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": this.state.errors.ingredients,
                    })}
                    placeholder="Ingredients"
                  ></textarea>
                  <p className="text-danger ">
                    {this.state.errors.ingredients}{" "}
                  </p>
                </div>

                <div className="col-md-8 m-auto">
                  <select
                    className="form-control form-control-lg"
                    onChange={(event) => this.changeHandler(event, "size")}
                  >
                    <option value="none selected ">Select Size</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                  </select>
                </div>
                <div className="col-md-4 m-auto">
                  <input
                    type="submit"
                    className="btn btn-light btn-block mt-4"
                    value="Update Item"
                  />
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
  item: state.item.item,
});

export default connect(mapStateToProps, { getitem, updateitem })(UpdateItem);
