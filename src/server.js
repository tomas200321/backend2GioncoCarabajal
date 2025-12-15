require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

const app = express()
app.use(express.json())

require('./config/passport')
app.use(passport.initialize())

app.use('/api/sessions', require('./routes/sessions.routes'))
app.use('/api/products', require('./routes/products.routes'))
app.use('/api/carts', require('./routes/carts.routes'))

app.get('/', (req,res)=>res.send({status:'OK Proyecto Final Backend'}))

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log('MongoDB Atlas conectado')
  app.listen(process.env.PORT, ()=>console.log('Servidor escuchando'))
})
.catch(err=>console.error(err))
