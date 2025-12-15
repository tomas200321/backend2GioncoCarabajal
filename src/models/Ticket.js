const mongoose = require('mongoose')
module.exports = mongoose.model('Ticket', new mongoose.Schema({
 code:String,
 amount:Number,
 purchaser:String,
 products:Array,
 createdAt:{type:Date,default:Date.now}
}))
