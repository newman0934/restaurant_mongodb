const express = require('express')
const router = express.Router()
const User = require("../models/user")
const passport = require("passport")
const bcrypt = require("bcryptjs")


router.get("/login",(req,res)=>{
    res.render("login")
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {                        
      successRedirect: '/',                                        
      failureRedirect: '/users/login'                        
    })(req, res, next)
  })

router.get("/register",(req,res)=>{
    res.render("register")
})

router.post("/register",(req,res)=>{
    const {name, email, password, password2} = req.body
    User.findOne({email:email}).then(user=>{
        if(user){
            console.log("user already exists")
            res.render("register",{name,email,password,password2})
        }else{
            const newUser = new User({
                name,
                email,
                password
            })
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err
                    newUser.password = hash
                    newUser.save().then(user=>{
                        res.redirect("/")
                    }).catch(err=>console.log(err))
                })
            })
        }
    })
})

router.get("/logout",(req,res)=>{
    req.logout()
    res.redirect("/users/login")
})

module.exports = router