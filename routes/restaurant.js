const express = require("express")
const router = express.Router()
const Restaurant = require("../models/restaurant")



// 新增一筆 Todo 頁面
router.get('/new', (req, res) => {
    res.render("new")
})
// 顯示一筆 Todo 的詳細內容
router.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
        if (err) return console.error(err)
        return res.render("show", {
            restaurant
        })
    })
})
// 新增一筆  Todo
router.post('/', (req, res) => {
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
// 修改 Todo 頁面
router.get('/:id/edit', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
        if (err) console.error(err)
        return res.render("edit", {
            restaurant
        })
    })
})
// 修改 Todo
router.put('/:id/', (req, res) => {
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
// 刪除 Todo
router.delete('/:id/delete', (req, res) => {
    Restaurant.findById(req.params.id,(err,restaurant)=>{
        if(err) return console.error(err)
        restaurant.remove(err=>{
            if(err) return console.error(err)
            return res.redirect("/")
        })
    })
})

module.exports = router