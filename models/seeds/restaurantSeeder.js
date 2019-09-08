const mongoose = require("mongoose")
const Restaurant = require("../restaurant")
const restaurantJson = require("./restaurant.json")
mongoose.connect('mongodb://localhost/restaurant',{useNewUrlParser:true})



const db = mongoose.connection

db.on("error",()=>{
    console.log("mongodb error")
})

db.once("open",()=>{
    console.log("mongodb connected")

    Restaurant.create(restaurantJson.results)

    console.log("done")
})