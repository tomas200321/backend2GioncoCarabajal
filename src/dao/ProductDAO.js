const Product = require('../models/Product')
class ProductDAO{
 getAll(){return Product.find()}
 getById(id){return Product.findById(id)}
 create(d){return Product.create(d)}
 update(id,d){return Product.findByIdAndUpdate(id,d,{new:true})}
 delete(id){return Product.findByIdAndDelete(id)}
}
module.exports = new ProductDAO()
