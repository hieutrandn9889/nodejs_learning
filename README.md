// start
npm start: nodemon src/index.js --exec babel-node >> chạy file index

// build
npm run build : "build": "babel src -d distribution" >> tạo folder và file index trong folder distribution

//serve
npm run serve: chay trong file index trong distribution

// babel
// install babel: npm install --save-dev babel-cli
// install plugin: npm install --save-dev babel-preset-es2015 babel-preset-stage-2
// install nodemon: npm install --save-dev nodemon  tha doi trong code và cập nhập ngay lập tức


//express
express: quản lý API từ client lên server và quản lý database
install express: npm install express-generator -g
build: express --view=ejs myApp
install nodemon: npm install --save-dev nodemon