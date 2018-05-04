import React, { Component } from 'react';

class Product extends Component {
  constructor(){
    super()
    this.deleteItem = this.deleteItem.bind(this)  
  }

  deleteItem() {
    this.props.deleteItem(this.props.id)
  }

  editItem() {
    this.props.editItem(this.props.id)
  }

  render() {
    return (
      <div className="flexH productContainer medred">
      <div><img src={this.props.info.image}  width="200px"/></div>
      <div className="flexV info">
        <div>{this.props.info.name} {this.props.id}</div>
        <div>{this.props.info.price}</div>
        <div className="flexH buttonGroup">
          <div><button onClick={this.deleteItem} className="green">Delete</button></div>
          <div onClick={this.editItem} className="mla"><button className="green">Edit</button></div>
        </div>
      </div>
    </div>
    );
  }
}

export default Product;
