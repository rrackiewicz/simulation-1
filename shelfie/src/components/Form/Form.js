import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      isAdding: true
      // currentlySelected: null
    }
    // this.updateName = this.updateName.bind(this)
    // this.updatePrice = this.updatePrice.bind(this)
    // this.updateImage = this.updateImage.bind(this)
    // this.cancelForm = this.cancelForm.bind(this)
    // this.addItem = this.addItem.bind(this)
  }

  render() {
    const {name, price, image} = this.props.form
    return (
      <div className="green formContainer">
        <div className="flexV">
          <div><img className="preview" src={image} width="200px" alt=""/></div>
          <label>Image Url</label>
          <input onChange={(e) => this.props.updateForm('image', e.target.value)} value={image} type="text"/>
          <label>Product Name</label>
          <input onChange={(e) => this.props.updateForm('name', e.target.value)} value={name} type="text"/>
          <label>Price</label>
          <input onChange={(e) => this.props.updateForm('price', e.target.value)} value={price} type="text"/>
        </div>

        <div className="flexH">
          <div><button onClick={() => this.props.cancelForm()} className="medred">Cancel</button></div>
          <div className="mla">
            <button 
              onClick={this.props.isAdding ? () => this.props.addItem() : () => this.props.updateItem()} 
              disabled={name.length > 0 && price > 0 && image.length > 0 ? false : true}
              className="medred">{this.props.isAdding ? 'Add to Inventory' : 'Submit'} 
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
