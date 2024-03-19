//buscar gitignore nodejs para no subir lo de node modules

const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000


//utilizacao middleware
app.use(express.json())

// var data = fs.readFileSync("./ficha5/data.json")
var data = fs.readFileSync("./data.json")
var dataObj = JSON.parse(data)

app.get('/', (req, res) => {
  res.send('Hello World, aaaaaaaaaaaaaaaaaaaaaaaaaaaaa!')
})

app.get('/users', (req, res) => {
  res.send(dataObj)
})

// el req se puede ver como un objeto con varias propiedades ejemplo: req{body:{},params:{}}

app.post('/users', (req, res) => {
  var person = req.body;
  var id = dataObj.data.length + 1;
  person.id = id;
  dataObj.data.push(person);
  res.send("User created with id: " + id)
})

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  var result = dataObj.data.filter((person) => person.id != id)
  if (dataObj.data.length == result.length){
    res.send("id nao encontrado")
  }
  else{
    dataObj.data = result;
    res.send(dataObj.data)
  }
})

app.get("/users/:id", (req, res) =>{
  var id = req.params.id;
  for (let i = 0; i < dataObj.data.length; i++) {
    if(dataObj.data[i].id == id){
      var person = dataObj.data[i];
      res.send(person);
    }
  }
  res.send("id: " + id + " nao existe.")
  // res.send(`Name of the person: ${person.firstName} ${person.lastName}, 
  // Profession of the person: ${person.profession}, Age: ${person.age}, and his id is: ${person.id} `)
})

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var details = req.body;
  details.id = id;
  var contains = false;
  for (let i = 0; i < dataObj.data.length; i++) {
    if(dataObj.data[i].id == id){
      dataObj.data[i].firstName = details.firstName;
      dataObj.data[i].lastName = details.lastName;
      dataObj.data[i].profession = details.profession;
      dataObj.data[i].age = details.age;
      // puedo poner dataObj.data[i] = details; pero tiene problemas, ejemplo si la persona no mete todos los valores para cada llave va a borrar los datos
      contains = true; //es para ver si existe el id
      break;
    }
  }
  if(contains)
    res.send(details)
  else
    res.send("id nao encontrado")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

