const express = require("express")
const router = express.Router()
const Restaurant = require("../models/restaurant")


//回傳搜尋後的頁面
router.get("/", (req, res) => {
    const keyword = req.query.keyword
    const sortKey = req.query.sortKey
    const sortValue = req.query.sortValue || 'desc'
    const sortObj = {}
    sortObj[sortKey] = sortValue

    Restaurant.find({})
    .sort(sortObj)
    .exec((err, restaurant) => {

        if (err) return console.error(err)
        const restaurants = restaurant.filter(restaurant => {
            // const regex = new RegExp(keyword)
            // return restaurant.name.match(regex) || restaurant.category.match(regex)
            let nameMatch = restaurant.name.toLowerCase().includes(keyword.toLowerCase())
            let cateforyMatch = restaurant.category.toLowerCase().includes(keyword.toLowerCase())

            return nameMatch || cateforyMatch
        })
        res.render('index', { restaurant: restaurants, keyword: keyword, sortKey: sortKey })
    })

})

module.exports = router