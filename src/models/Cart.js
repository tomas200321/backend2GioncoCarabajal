const mongoose = require('mongoose')
module.exports = mongoose.model('Cart', new mongoose.Schema({
 products:[{
  product:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},
  quantity:Number
 }]
}))
