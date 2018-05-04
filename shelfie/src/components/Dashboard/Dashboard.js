import React, { Component } from 'react';
import Product from '../Product/Product'

class App extends Component {
  render() {
    let product = this.props.inventory.map((e,i) => {
      return (
        <Product
          key={e+i} 
          id={this.props.inventory[i].id}
          info={this.props.inventory[i]}
          deleteItem = {this.props.deleteItem}
          editItem = {this.props.editItem}
          refreshInventory = {this.refreshInventory}
        />
      )
    })

    return (
      <div className="flexV">
        {product}
      </div>
    );
  }
}

export default App;
