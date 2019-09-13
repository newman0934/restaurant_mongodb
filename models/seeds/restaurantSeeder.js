const mongoose = require("mongoose")
const Restaurant = require("../restaurant")
const restaurantJson = require("./restaurant.json")
const User = require("../user")
const bcrypt = require("bcryptjs")
const userData = require("./user.json")
mongoose.connect('mongodb://localhost/restaurant', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const db = mongoose.connection

db.on("error", () => {
    console.log("mongodb error")
})

db.once("open", () => {
    console.log("mongodb connected")

    for (let i = 0; i < userData.results.length; i++) {
        const user = User(userData.results[i])

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash
                user.save().then().catch(err => {
                    console.log(err)
                })
            })
        })

        for (let j = i * 3; j < (i + 1) * 3; j++) {
            Restaurant.create({
                ...restaurantJson.results[j],
                userId: user._id
            })

            if (j === restaurantJson.results.length) return
        }
    }

    console.log("done")
})