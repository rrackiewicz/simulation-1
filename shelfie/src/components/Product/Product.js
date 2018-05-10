import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="flexH productContainer medred">
      <div><img src={this.props.info.image} width="200px"/></div>
      <div className="flexV info">
        <div>{this.props.info.name} {this.props.id}</div>
        <div>{this.props.info.price}</div>
        <div className="flexH buttonGroup">
          <div><button onClick={() => this.props.deleteItem(this.props.id)} className="green">Delete</button></div>
          <div onClick={() => this.props.editItem(this.props.id, this.props.info)} className="mla"><button className="green">Edit</button></div>
        </div>
      </div>
    </div>
    );
  }
}

export default Product;
