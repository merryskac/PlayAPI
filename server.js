import express from 'express'
import mongoose  from 'mongoose'
import appRouters from './routers/channel.js';
import vidRouters from './routers/product.js';
import commentRouters from './routers/comment.js'



mongoose.connect('mongodb://0.0.0.0:27017/Play')
const database = mongoose.connection;

database.once('connected',()=>{
  console.log('Database Connected!')
})

database.on('error',(error)=>{
  console.log(error)
})

const app = express()
app.use(express.json())

app.use('/play',appRouters)


app.listen(3000,()=>{
  console.log('server open!')
})