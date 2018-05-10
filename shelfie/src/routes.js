import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'

//
export default (
  <Switch>
    <Route render={(props) => 
      <Dashboard 
        // So I have access to props object
        {...props} 
        inventory={this.state.inventory}
        deleteItem={this.deleteItem}
        refreshInventory = {this.refreshInventory}
      />
      } exact path ="/" />
    <Route render={(props) => 
      <Form
        // So I have access to props object
        {...props}
        addItem = {this.addItem}
        refreshInventory = {this.refreshInventory}
        selectedProduct = {this.state.selectedProduct}
        isAdding = {this.state.isAdding}
      /> 
      } path ="/add" />
  </Switch>
)

//Keep the router separate to prevent bloat