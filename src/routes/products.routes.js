const router = require('express').Router()
const passport = require('passport')
const authorize = require('../middlewares/authorization')
const ProductRepository = require('../repositories/ProductRepository')

router.post('/',
 passport.authenticate('current',{session:false}),
 authorize('admin'),
 async(req,res)=>res.json(await ProductRepository.create(req.body))
)

router.put('/:id',
 passport.authenticate('current',{session:false}),
 authorize('admin'),
 async(req,res)=>res.json(await ProductRepository.update(req.params.id,req.body))
)

router.delete('/:id',
 passport.authenticate('current',{session:false}),
 authorize('admin'),
 async(req,res)=>res.json({msg:'Producto eliminado'})
)

module.exports = router
