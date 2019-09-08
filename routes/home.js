const express = require("express")
const router = express.Router()
const Restaurant = require("../models/restaurant")


//顯示所有餐廳頁面
router.get("/",(req,res)=>{
    Restaurant.find((err,restaurant)=>{
        if (err) return console.error(err)
        return res.render("index",{restaurant})
    })
})

module.exports = router