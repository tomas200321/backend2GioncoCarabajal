const dao = require('../dao/ProductDAO')
module.exports = {
 getAll:()=>dao.getAll(),
 getById:id=>dao.getById(id),
 create:d=>dao.create(d),
 update:(id,d)=>dao.update(id,d),
 delete:id=>dao.delete(id)
}
