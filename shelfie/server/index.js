//TODO: 
//USE THIS STRUCTURE IF YOU ARE NOT USING A SEED FILE

const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
const massive = require('massive');
const pc = require('./controllers/products_controller')
require('dotenv').config()

const app = express();
app.use( bodyParser.json() );
//app.use( cors() );

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  console.log("Connected to Database")
})
//app.set puts the value of dbInstance (our database)
//on the variable 'db'

app.post('/api/inventory', pc.addOne);
app.get('/api/inventory', pc.getAll);
app.delete('/api/inventory/:id', pc.delete);
app.put('/api/inventory/:id', pc.update);
//app.get('/api/products/:id', pc.getOne);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port ${port}.`))
