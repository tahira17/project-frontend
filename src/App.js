import React from "react";
import "./App.css";
import Nav from "./Components/Shared/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Components/Welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import inventory from "./Components/Inventory/inventory";
import additem from "./Components/Inventory/operations/AddItem";
import UpdateItem from "./Components/Inventory/operations/UpdateItem";
import ErrorPage from "./Components/Shared/ErrorPage";
import { Provider } from 'react-redux';
import store from './Store';
import { updatesale } from "./actions/projectactions";
import addsale from "./Components/Sales/salesoperations/addsale";
import sale from "./Components/Sales/sale";


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Nav} />
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/inventory" exact component={inventory} /> 

        <Route path="/additem" exact component={additem} />   
        <Route path="/updateitem/:id" exact component={UpdateItem} />   

        // sales

        <Route path="/sale/:id" exact component={sale} />   
        <Route path="/sale/addsale/:id" exact component={addsale} />   
        <Route path="/sale/updatesale/:id/:Sid" exact component={updatesale} />   
        <Route path="/" component ={ErrorPage} />
        </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
