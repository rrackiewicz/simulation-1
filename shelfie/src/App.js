import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'
// import routes from './routes'

class App extends Component {
  constructor(){
    super()
    this.state = {
        inventory: [],
        form: {
          id: 0,
          name: '',
          price: 0,
          image: ''
        },
        isAdding: true
    }
    this.editItem = this.editItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.updateForm = this.updateForm.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.cancelForm = this.cancelForm.bind(this)
    //this.refreshInventory = this.refreshInventory.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      const newInventory = res.data;
      let inventory = [...this.state.inventory]
      inventory = newInventory;
      this.setState({ inventory })
      console.log(`Received ${inventory}`)
    }).catch( err => {
      alert("Failed fetching inventory")
    })
  }

  deleteItem(id) {
    console.log(`deleting: ${id}`)
    axios.delete(`api/inventory/${id}`).then(res => {
      const newInventory = res.data;
      let inventory = [...this.state.inventory]
      inventory = newInventory;
      this.setState({ inventory })
      console.log('deleted item')
    }).catch(err => {
      alert("Failed to delete item")
    })
    // this.refreshInventory();
  }

  addItem() {
    console.log(`adding ${this.state.form.name}`)
    let item = { ...this.state.form }
    console.log(item)
    axios.post('/api/inventory', item).then(res => {
      const newInventory = res.data;
      let inventory = [...this.state.inventory]
      inventory = newInventory;
      this.setState({ inventory })
      this.cancelForm()
      console.log("Item successfully added")
      }).catch(err =>{
        console.log("Failed adding item")
      })
    //this.props.refreshInventory()  
  }

  updateItem(){
    console.log(`updating ${this.state.form.name} @ id:${this.state.form.id}`)
    axios.put(`/api/inventory/${this.state.form.id}`, this.state.form).then(res => {
      const newInventory = res.data;
      let inventory = [...this.state.inventory]
      inventory = newInventory;
      this.setState({ inventory })
      this.cancelForm()
      console.log("Item successfully added")
      }).catch(err =>{
        console.log("Failed adding item")
      })
  }

  updateForm(stat,val) {
    let form = { ...this.state.form }
    form[stat] = val
    this.setState({ 
      form,
      isAdding : false
     })
  }

  cancelForm() {
    let form = { ...this.state.form }
    form = {
      name: '',
      price: 0,
      image: ''
    }
    this.setState({ 
      form,
      isAdding : true
     })
  }

  editItem(id, info){
    let form = { ...this.state.form }
    form = info
    this.setState({ 
      form,
      isAdding: false
    })
  }

  render() {
    return (
      <div className="flexH aic jcc"> 
        <Header />
        <Dashboard 
          inventory = {this.state.inventory} 
          deleteItem = {this.deleteItem}
          editItem = {this.editItem}
        />
        <Form 
          isAdding = {this.state.isAdding} 
          form = {this.state.form}
          addItem = {this.addItem}
          updateForm = {this.updateForm}
          updateItem = {this.updateItem}
          cancelForm = {this.cancelForm}
          // refreshInventory = {this.refreshInventory}
        />
      </div>
    );
  }
}

export default App;
