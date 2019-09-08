
//載入express
const express = require("express")
const app = express()
const port = 3000

//載入express-handlebars
const exphbs = require("express-handlebars")

//設定express-handlebars樣板引擎
app.engine("handlebars",exphbs({defaultLayout:"main"}))
app.set("view engine","handlebars")

//指向靜態檔案位置
app.use(express.static("public"))

//載入mogoose
const mongoose = require("mongoose")
//連接資料庫
mongoose.connect("mongodb://localhost/restaurant",{useNewUrlParser:true})

//載入body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

//載入Scheme
const Restaurant =require("./models/restaurant")

//連到資料庫
const db = mongoose.connection

db.on("error",()=>{
    console.log("mongodb error")
})

db.once("open",()=>{
    console.log("mongodb connected")
})

//載入methodorverride
const methodOverride = require("method-override")
app.use(methodOverride("_method"))

//回傳index頁面
app.use("/",require("./routes/home"))

//回傳show頁面
app.use("/restaurant",require("./routes/restaurant"))

//回傳搜尋後的頁面
app.use("/search",require("./routes/search"))

//監聽並啟動伺服器
app.listen(port,()=>{
    console.log("express is listening")
})