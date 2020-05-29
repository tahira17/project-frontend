import React, { Component } from 'react'
import classnames from 'classnames'
import {additem} from '../../../actions/projectactions'
import {connect} from 'react-redux'

 class AddItem extends Component {

constructor(props) {
    super(props)

    this.state = {
         
        name: ' ',
        ingredients : ' ',
        price: ' ',
        size: ' ',
        errors : ' ',
        data: ' '
    }
}

componentWillReceiveProps(nextProps){
    if(nextProps.errors){
this.setState({errors : nextProps.errors})

    }
}


changeHandler = (event,fieldName) =>{
    this.setState({
        [fieldName]: event.target.value
    })
}

submitHandler = (event) => {

    const newitem={
    
        name: this.state.name,
        price : this.state.price,
        ingredients : this.state.ingredients,
        size : this.state.size

    }
    
    this.props.additem(newitem,this.props.history)

    event.preventDefault()
    
    
    }

    render() {
        return (
        
                <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <br />
                            <h5 className="display-4 text-center">Add New item</h5>
                            <hr />
                            <form onSubmit= {(event)=> this.submitHandler(event)} >
                                <div className="col-md-8 m-auto">
                                    <input type="text" onChange={(event)=> this.changeHandler (event, "name")} className={classnames ("form-control form-control-lg",{"is-invalid" :this.state.errors.name })} placeholder="Drink Name" />
                                    <p className = "text-danger ">{this.state.errors.name} </p>
                                    </div>
                                <div className="col-md-8 m-auto">
                                    <input type="text" onChange={(event)=> this.changeHandler (event, "price")} className={classnames ("form-control form-control-lg",{"is-invalid" :this.state.errors.price })} placeholder="Drink  Price" />
                                    <p className = "text-danger ">{this.state.errors.price} </p>
                                    </div>
                                <div className="col-md-8 m-auto">
                                    <textarea onChange={(event)=> this.changeHandler (event, "ingredients")} className={classnames ("form-control form-control-lg",{"is-invalid" :this.state.errors.ingredients })} placeholder="Ingredients"></textarea>
                                    <p className = "text-danger ">{this.state.errors.ingredients} </p>
                                    </div>

                                <div className="col-md-8 m-auto">
                                    <select className="form-control form-control-lg" onChange={(event)=> this.changeHandler (event, "size")} >
                                        <option value= 'none selected '>Select Size</option>
                                        <option value='large'>Large</option>
                                        <option value='medium'>Medium</option>
                                        <option value='small'>Small</option>
                                    </select>
                                </div>
                               <div className="col-md-4 m-auto">
                               <input type="submit" className="btn btn-light btn-block mt-4" value="Add to Inventory" />
                               </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

const mapStateToProps =(state) => ({

    errors : state.errors

})

export default connect(mapStateToProps,{additem})(AddItem)
