import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createsale} from '../../../actions/projectactions'
import {Link} from 'react-router-dom'
 class addsale extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

             buyername :' ',
             solditems :' ',
             amount : ' '
             
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
    
        const newsale={
        
          buyername : this.state.buyername,
          solditems : this.state.solditems,
          amount:this.state.amount    
        }
       
        this.props.createsale(newsale, this.props.history)
      //  alert(this.state.buyername + " " + this.state.solditem +" " + this.state.amount)
        event.preventDefault()
        
        }
    
        render() {

            return (

                <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <br />
                            <h5 className="display-4 text-center">Add New Sale</h5>
                            <hr />
                            <Link to={`/sale`} className="btn btn-light">
                            Back 
                        </Link>
                            <form onSubmit= {(event)=> this.submitHandler(event)} >
                                <div className="col-md-8 m-auto">
                                    <input type="text" onChange={(event)=> this.changeHandler (event, "buyername")} className="form-control form-control-lg" placeholder="Buyer Name" />
                                    
                                    </div>
                                    <br />
                                <div className="col-md-8 m-auto">
                                    <input type="text" onChange={(event)=> this.changeHandler (event, "solditems")} className="form-control form-control-lg" placeholder="Items Sold" />
                                   
                                    </div>
                                    <br />
                                    <div className="col-md-8 m-auto">
                                    <input type="text" onChange={(event)=> this.changeHandler (event, "amount")} className="form-control form-control-lg" placeholder="amount" />
                               
                                    </div>
                                    <br />
                               <div className="col-md-4 m-auto">
                               <input type="submit" className="btn btn-light btn-block mt-4" value="Add Sale" />
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



export default connect (mapStateToProps,{createsale})(addsale)
