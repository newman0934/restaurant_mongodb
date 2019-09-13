# Restaurant List
餐廳列表

## Features
- 列出所有的餐廳
- 搜尋餐廳
- 點擊餐廳可以show出餐廳的詳細訊息
- 編輯餐廳資訊
- 新增餐廳
- 刪除餐廳
- 排序餐廳
- 使用者登入、登出、註冊
- Facebook登入
## Quick view

![main page](https://raw.githubusercontent.com/newman0934/restaurant_mongodb/master/public/img/show.png)
![index page](https://raw.githubusercontent.com/newman0934/restaurant_mongodb/master/public/img/index.png)
![edit page](https://raw.githubusercontent.com/newman0934/restaurant_mongodb/master/public/img/edit.png)
![login page](https://raw.githubusercontent.com/newman0934/restaurant_mongodb/master/public/img/login.png)
![register page](https://raw.githubusercontent.com/newman0934/restaurant_mongodb/master/public/img/register.png)
## Environment set up
- bcryptjs: ^2.4.3,
- body-parser: ^1.19.0,
- connect-flash: ^0.1.1,
- dotenv: ^8.1.0,
- express: ^4.17.1,
- express-handlebars: ^3.1.0,
- express-session: ^1.16.2,
- method-override: ^3.0.0,
- mongoose: ^5.6.13,
- passport: ^0.4.0,
- passport-facebook: ^3.0.0,
- passport-local: ^1.0.0

### Installation
- Download restaurant ZIP
- 解壓縮ZIP檔案
- 下載nvm並安裝
- 打開cmd
- cd到檔案位址
- 在cmd輸入nvm install 10.15.0
- 在cmd輸入nvm use 10.15.0
- 安裝mongodb
- 安裝mongoose
- 在mongoose建立一個restaurant資料庫
- cd到seeds資料夾
- 輸入node restaurantSeeder.js
- cd到restaurant_mongodb位址
- 在根目錄新增一個.env檔案並把以下code輸入到裡面
    FACEBOOK_ID=你的facebook_id
    FACEBOOK_SECRET=你的facebook密鑰
    FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
- 輸入node app.js
- 在瀏覽器上進入http://localhost:3000