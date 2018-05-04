module.exports = {
  //TODO: POST
  addOne: (req, res) => { 
    const dbInstance = req.app.get('db')
    const {name, price, image} = req.body
    //instead of creating this variable, I could have
    //just called req.app.get('db').create_products() instead
    dbInstance.create_product([name, price, image])
      .then(() => res.status(200).send())
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
    .then(inventory => {
      res.status(200).send(inventory)
    })
    .catch(err => res.status(500).send(err))
  },
  //TODO: PUT
  update: (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.update_product()
    .then(inventory => {
      res.status(200).send(inventory)
    })
    .catch(err => res.status(500).send(err))
  },
  //TODO: DELETE
  delete: (req, res) => {
    const {id} = req.params
    const dbInstance = req.app.get('db')

    dbInstance.delete_product(id)
    .then(() => res.status(200).send())
    .catch(err => res.status(500).send(err))
  }
}