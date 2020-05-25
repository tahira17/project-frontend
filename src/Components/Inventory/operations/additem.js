import React, { Component } from 'react'
import axios from 'axios'

 class additem extends Component {

constructor(props) {
    super(props)

    this.state = {
         
        name: ' ',
        ingredients : ' ',
        price: ' ',
        size: ' '
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
    
    axios.post('http://localhost:8080/inventory',newitem)
    .then((res)=>{
        alert("Success")
    
    }).catch((err)=>{
        alert("Error")
    })
    
    event.preventDefault()
    
    
    }

    render() {
        return (
        
                <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Add New item</h5>
                            <hr />
                            <form onSubmit= {(event)=> this.submitHandler(event)} >
                                <div className="form-group">
                                    <input type="text" onChange={(event)=> this.changeHandler (event, "name")} className="form-control form-control-lg " placeholder="Drink Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event)=> this.changeHandler (event, "price")} className="form-control form-control-lg" placeholder="Drink  Price" />
                                </div>
                                <div className="form-group">
                                    <textarea onChange={(event)=> this.changeHandler (event, "ingredients")} className="form-control form-control-lg" placeholder="Ingredients"></textarea>
                                </div>

                                <div className="form-group">
                                    <select className="form-control form-control-lg" onChange={(event)=> this.changeHandler (event, "size")} >
                                        <option value= 'none selected '>Select Size</option>
                                        <option value='large'>Large</option>
                                        <option value='medium'>Medium</option>
                                        <option value='small'>Small</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default additem
