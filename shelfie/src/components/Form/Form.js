import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      price: 0,
      image: '',
      isAdding: true,
      currentlySelected: null
    }
    this.updateName = this.updateName.bind(this)
    this.updatePrice = this.updatePrice.bind(this)
    this.updateImage = this.updateImage.bind(this)
    this.cancelForm = this.cancelForm.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  componentDidMount() {
    console.log(this.props.selectedProduct)
      this.setState({
        name: this.props.selectedProduct.name,
        price: this.props.selectedProduct.price,
        image: this.props.selectedProduct.image,
      })
  }

  updateImage(e) {
    this.setState({image: e.target.value})
  }

  updateName(e) {
    this.setState({name: e.target.value})
  }

  updatePrice(e) {
    this.setState({price: e.target.value})
  }

  cancelForm() {
    this.setState({
      image: '',
      name: '',
      price: 0
    })
  }

  addItem() {
    const item = {
      name: this.state.name || 'Acme Anvil',
      price: this.state.price || '1.99',
      image: this.state.image || 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fthewealthwatchman.com%2Fwp-content%2Fuploads%2F2015%2F01%2FAcme-anvil.jpg&f=1'
    }

    axios.post('/api/inventory', item).then(res => {
      // const newInventory = res.data;
      // let inventory = [...this.state.inventory]
      // inventory = newInventory;
      // this.setState({tempInv: inventory})
      }).catch(err =>{
        console.log("Failed adding item")
      })
    //console.log(this.state.tempInv)
    this.props.refreshInventory()
  }

  render() {
    return (
      <div className="green formContainer">
        <div className="flexV">
          <div><img className="preview" src={this.state.image} width="200px" alt=""/></div>
          <label>Image Url</label>
          <input onChange={this.updateImage} value={this.state.image} type="text"/>
          <label>Product Name</label>
          <input onChange={this.updateName} value={this.state.name} type="text"/>
          <label>Price</label>
          <input onChange={this.updatePrice} value={this.state.price} type="text"/>
        </div>

        <div className="flexH">
          <div><button onClick={this.cancelForm} className="medred">Cancel</button></div>
          <div className="mla"><button onClick={this.addItem} className="medred">{this.props.isAdding ? 'Add to Inventory' : 'Submit'}</button></div>
        </div>
      </div>
    )
  }
}

export default Form;
