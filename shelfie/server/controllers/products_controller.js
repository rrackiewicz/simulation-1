module.exports = {
  //TODO: POST
  addOne: (req, res) => { 
    const dbInstance = req.app.get('db')
    const {name, price, image} = req.body
    //instead of creating this variable, I could have
    //just called req.app.get('db').create_products() instead
    dbInstance.create_product([name, price, image])
      .then((inventory) => res.status(200).send(inventory))
      .catch(() => res.status(500).send())
  },

  //TODO: GET
  getOne: (req, res) => {
    const dbInstance = req.app.get('db')
    const { id } = req.params

    dbInstance.read_product(id)
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send())
  },

  //TODO: GET/:ID
  getAll: (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_products()
    .then(inventory => res.status(200).send(inventory))
    .catch(err => res.status(500).send(err))
  },

  //TODO: PUT id and body
  update: (req, res) => {
    const dbInstance = req.app.get('db')
    const { id } = req.params
    const { name, price, image } = req.body

    dbInstance.update_product([id, name, price, image])
    .then(inventory => {
      console.log("Item updated")
      res.status(200).send(inventory)
    })
    .catch(err => {
      console.log("Item not updated")
      res.status(500).send(err)
    })
  },

  //TODO: DELETE
  delete: (req, res) => {
    const { id } = req.params
    const dbInstance = req.app.get('db')

    dbInstance.delete_product(id)
    .then((inventory) => res.status(200).send(inventory))
    .catch(err => res.status(500).send(err))
  }
}