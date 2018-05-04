import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
        inventory: [],
        selectedProduct: {
          name: '',
          price: 0,
          image: ''
        },
        isAdding: true
      // inventory: [
      //   {
      //     name: 'Chia Pig',
      //     price: 2.99,
      //     image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.weekendletter.com%2Fwp-content%2Fuploads%2F2009%2F12%2FChia-Pig.jpg&f=1'
      //   },
      //   {
      //     name: 'Porcupine',
      //     price: 45.00,
      //     image: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F54%2F48%2Fcc%2F5448cc3c13513e61b036851e13528a46.jpg&f=1'
      //   },
      //   {
      //     name: 'Rubiks Cube',
      //     price: 9.99,
      //     image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F30%2FRubik_cube.png%2F1024px-Rubik_cube.png&f=1'
      //   }
      // ]
    }
    this.editItem = this.editItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.refreshInventory = this.refreshInventory.bind(this)
  }

  componentDidMount() {
    this.refreshInventory();
  }

  refreshInventory() {
    axios.get('/api/inventory').then(res => {
      const newInventory = res.data;
      let inventory = [...this.state.inventory]
      inventory = newInventory;
      this.setState({ inventory })
      console.log(inventory)
    }).catch( err => {
      alert("Failed fetching inventory")
    })
  }

  deleteItem(id) {
    console.log(`deleting: ${id}`)
    axios.delete(`api/inventory/${id}`).then(res => {
      console.log('deleting item')
    }).catch(err => {
      alert("Failed to delete item")
    })
    this.refreshInventory();
  }

  editItem(id){
    this.setState({
      selectedProduct : id,
      isAdding: true
    })
  }

  render() {
    return (
      <div>
      <Header />
        <div className="flexH jce">
          <div><Dashboard 
            inventory={this.state.inventory}
            deleteItem={this.deleteItem}
            refreshInventory = {this.refreshInventory}
          />
          </div>
          <div>
            <Form 
              addItem = {this.addItem}
              refreshInventory = {this.refreshInventory}
              selectedProduct = {this.state.selectedProduct}
              isAdding = {this.state.isAdding}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
