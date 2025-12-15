const dao = require('../dao/UserDAO')
module.exports = {
 getByEmail: e => dao.getByEmail(e),
 getById: id => dao.getById(id),
 create: u => dao.create(u),
 update: (id,d) => dao.update(id,d)
}
