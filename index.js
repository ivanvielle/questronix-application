//setup dependencies
const express = require('express')
const mongoose = require('mongoose')

//routes
const itemRoutes = require('./routes/item')

//database
mongoose.connection.once('open', () => console.log("Now connected to mongoDB Atlas"))

mongoose.connect('mongodb+srv://mongodbcluster:mongodbcluster@cluster0.ceomo.mongodb.net/inventory?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

//server
const app = express()
const port = 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//add the routes
app.use('/api/items', itemRoutes)

//listen to server
app.listen(port, () => console.log(`Listening to port ${port}`))