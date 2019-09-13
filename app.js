
//載入express
const express = require("express")
const app = express()
const port = 3000

//判別開發環境
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

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
mongoose.connect("mongodb://localhost/restaurant",{useNewUrlParser:true,useCreateIndex:true})

//載入body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

//載入Scheme
const Restaurant =require("./models/restaurant")

//載入session
const session = require("express-session")
app.use(session({
    secret: "your secret key",
    resave: false,
    saveUninitialized: true
}))

//載入passport
const passport =require("passport")
app.use(passport.initialize())
app.use(passport.session())

//載入passport config
require("./config/passport")(passport)
app.use((req,res,next)=>{
    res.locals.user = req.user
    res.locals.isAuthenticated = req.isAuthenticated()
    next()
})


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

//回傳users的功能頁面
app.use("/users",require("./routes/user"))

app.use("/auth",require("./routes/auths"))

//監聽並啟動伺服器
app.listen(port,()=>{
    console.log("express is listening")
})