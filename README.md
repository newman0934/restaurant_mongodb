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

## Quick view

![main page](https://raw.githubusercontent.com/newman0934/restaurant_mongodb/master/public/img/show.png)
![index page](https://raw.githubusercontent.com/newman0934/restaurant_mongodb/master/public/img/index.png)
![edit page](https://raw.githubusercontent.com/newman0934/restaurant_mongodb/master/public/img/edit.png)
## Environment set up
- Node.js
- Express.js
- express-handlebars
- body-parser
- nodemon
- mongodb
- mongoos
- method-override

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
- 輸入node app.js
- 在瀏覽器上進入http://localhost:3000