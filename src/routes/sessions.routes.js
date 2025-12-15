const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const nodemailer = require('nodemailer')
const UserRepository = require('../repositories/UserRepository')
const UserDTO = require('../dtos/UserDTO')
const { v4: uuidv4 } = require('uuid')

router.post('/login', async(req,res)=>{
 const user = await UserRepository.getByEmail(req.body.email)
 if(!user || !bcrypt.compareSync(req.body.password, user.password))
  return res.status(401).json({error:'Credenciales inválidas'})
 const token = jwt.sign({sub:user._id}, process.env.JWT_SECRET,{expiresIn:'1d'})
 res.json({token})
})

router.post('/logout',(req,res)=>res.json({msg:'Logout correcto'}))

router.get('/current',
 passport.authenticate('current',{session:false}),
 (req,res)=>res.json(new UserDTO(req.user))
)

router.post('/forgot-password', async(req,res)=>{
 const token = uuidv4()
 await UserRepository.update(req.body.userId,{
  resetToken: token,
  resetTokenExp: Date.now()+3600000
 })
 const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{user:process.env.MAIL_USER,pass:process.env.MAIL_PASS}
 })
 await transporter.sendMail({
  to: req.body.email,
  subject:'Recuperar contraseña',
  html:`<a href="${process.env.BASE_URL}/reset/${token}">Restablecer</a>`
 })
 res.json({msg:'Correo enviado'})
})

module.exports = router
