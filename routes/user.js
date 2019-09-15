const express = require("express")
const router = express.Router()
const User = require("../models/user")
const passport = require("passport")
const bcrypt = require("bcryptjs")


router.get("/login", (req, res) => {
    let errors = [];
    let errorMessages = req.flash("error")[0];
    if (!errorMessages) {
        res.render("login");
    } else {
        errors.push({
            message: errorMessages
        });
        res.render("login", {
            errors
        });
    }
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/users/login",
        failureFlash: true,

    })(req, res, next)
})

router.get("/register", (req, res) => {
    res.render("register")
})

router.post("/register", (req, res) => {
    const {
        name,
        email,
        password,
        password2
    } = req.body

    let errors = []

    if (!email || !password || !password2) {
        errors.push({
            message: "email、password與comfirm password為必填"
        })
    }

    if (password != password2) {
        errors.push({
            message: "password與confirm password輸入的密碼不一致"
        })
    }

    if (errors.length > 0) {
        res.render("register", {
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        User.findOne({
            email: email
        }).then(user => {
            if (user) {
                errors.push({
                    message: "這個email已經註冊過了"
                })
                res.render("register", {
                    errors,
                    name,
                    email,
                    password,
                    password2
                })
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash
                        newUser.save().then(user => {
                            res.redirect("/")
                        }).catch(err => console.log(err))
                    })
                })
            }
        })
    }

})

router.get("/logout", (req, res) => {
    req.logout()
    req.flash("success_msg", "你已經成功登出")
    res.redirect("/users/login")
})

module.exports = router