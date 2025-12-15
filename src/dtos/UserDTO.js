class UserDTO{
 constructor(u){
  this.id = u._id
  this.name = u.first_name
  this.email = u.email
  this.role = u.role
 }
}
module.exports = UserDTO
