const router = require('express').Router()
const passport = require('passport')
const authorize = require('../middlewares/authorization')
const Cart = require('../models/Cart')
const ticketService = require('../services/TicketService')

router.post('/:cid/product/:pid',
 passport.authenticate('current',{session:false}),
 authorize('user'),
 async(req,res)=>{
  const cart = await Cart.findById(req.params.cid)
  cart.products.push({product:req.params.pid,quantity:1})
  await cart.save()
  res.json(cart)
 })

router.post('/:cid/purchase',
 passport.authenticate('current',{session:false}),
 authorize('user'),
 async(req,res)=>{
  const cart = await Cart.findById(req.params.cid)
  const result = await ticketService(cart, req.user.email)
  res.json(result)
 })

module.exports = router
