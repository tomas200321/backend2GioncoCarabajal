const mongoose = require('mongoose')
module.exports = mongoose.model('Product', new mongoose.Schema({
 title:String,
 price:Number,
 stock:Number
}))
