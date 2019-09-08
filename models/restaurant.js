const mongoose = require("mongoose")
const Scheme = mongoose.Schema

const restaurantScheme = new Scheme({
    name:{
        type:String,
        required:true
    },
    name_en:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    google_map:{
        type:String
    }
})


module.exports = mongoose.model("restaurant",restaurantScheme)