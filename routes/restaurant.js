const express = require("express")
const router = express.Router()
const Restaurant = require("../models/restaurant")
const { authenticated } = require('../config/auth')


// 新增餐廳頁面
router.get('/new', authenticated, (req, res) => {
    res.render("new")
})
// 顯示餐廳的詳細內容
router.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
        if (err) return console.error(err)
        return res.render("show", {
            restaurant
        })
    })
})
// 新增一筆餐廳資訊
router.post('/', authenticated, (req, res) => {
    const restaurant = new Restaurant({
        name: req.body.name,
        name_en: req.body.name_en,
        category: req.body.category,
        image: req.body.image,
        location: req.body.location,
        phone: req.body.phone,
        rating: req.body.rating,
        description: req.body.description,
        google_map: req.body.google_map
    })
    restaurant.save((err) => {
        if (err) return console.error(err)
        return res.redirect("/")
    })
})
// 修改餐廳頁面
router.get('/:id/edit', authenticated, (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
        if (err) console.error(err)
        return res.render("edit", {
            restaurant
        })
    })
})
// 修改餐廳資訊
router.put('/:id/', authenticated, (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
        if (err) return console.error(err)
        restaurant.name = req.body.name
        restaurant.name_en = req.body.name_en
        restaurant.category = req.body.category
        restaurant.image = req.body.image
        restaurant.location = req.body.location
        restaurant.phone = req.body.phone
        restaurant.google_map = req.body.google_map
        restaurant.rating = req.body.rating
        restaurant.description = req.body.description

        restaurant.save(err => {
            if (err) return console.error(err)
            return res.redirect(`/restaurant/${req.params.id}`)
        })
    })
})
// 刪除餐廳資訊
router.delete('/:id/delete', authenticated, (req, res) => {
    Restaurant.findById(req.params.id,(err,restaurant)=>{
        if(err) return console.error(err)
        restaurant.remove(err=>{
            if(err) return console.error(err)
            return res.redirect("/")
        })
    })
})

module.exports = router