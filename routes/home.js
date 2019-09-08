const express = require("express")
const router = express.Router()
const Restaurant = require("../models/restaurant")

router.get("/",(req,res)=>{
    Restaurant.find((err,restaurant)=>{
        if (err) return console.error(err)
        return res.render("index",{restaurant})
    })
})

module.exports = router