const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const UserRepository = require('../repositories/UserRepository')

passport.use('current', new Strategy({
 jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
 secretOrKey: process.env.JWT_SECRET
}, async (payload, done)=>{
 try{
  const user = await UserRepository.getById(payload.sub)
  if(!user) return done(null,false)
  return done(null,user)
 }catch(err){ done(err,false) }
}))
