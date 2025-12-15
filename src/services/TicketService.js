const Ticket = require('../models/Ticket')
const ProductRepository = require('../repositories/ProductRepository')
const { v4: uuidv4 } = require('uuid')

module.exports = async (cart, purchaser)=>{
 let total = 0
 let purchased = []
 let notPurchased = []

 for(const item of cart.products){
  const prod = await ProductRepository.getById(item.product)
  if(prod.stock >= item.quantity){
    prod.stock -= item.quantity
    await prod.save()
    total += prod.price * item.quantity
    purchased.push(item)
  }else{
    notPurchased.push(item)
  }
 }

 const ticket = await Ticket.create({
  code: uuidv4(),
  amount: total,
  purchaser,
  products: purchased
 })

 return { ticket, notPurchased }
}
