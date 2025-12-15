const mongoose = require('mongoose')
module.exports = mongoose.model('User', new mongoose.Schema({
 first_name:String,
 last_name:String,
 email:{type:String,unique:true},
 age:Number,
 password:String,
 role:{type:String,default:'user'},
 cart:{type:mongoose.Schema.Types.ObjectId,ref:'Cart'},
 resetToken:String,
 resetTokenExp:Date
}))
