const User = require('../models/User')
class UserDAO{
 getByEmail(e){return User.findOne({email:e})}
 getById(id){return User.findById(id)}
 create(u){return User.create(u)}
 update(id,d){return User.findByIdAndUpdate(id,d,{new:true})}
}
module.exports = new UserDAO()
