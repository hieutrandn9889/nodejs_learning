// install babel: npm install --save-dev babel-cli
// install plugin: npm install --save-dev babel-preset-es2015 babel-preset-stage-2
// install nodemon: npm install --save-dev nodemon  tha doi trong code và cập nhập ngay lập tức


// express: quản lý API từ client lên server và quản lý database
// install express-generator: npm install express-generator -g
//EVENT
const eventEmitter = require('events');
class Customer extends eventEmitter{
    // khoi tao
    constructor(name, gender){
        super();
        this.name   = name;
        this.gender = gender
    }
};
const mrHieu = new Customer("Hieu", "male")
const msHuyen = new Customer("Huyen", "female")
// phuong thuc on: dk su kien eventCallFoods
const callBackFunction = (foods, Customer) => {
    for(let index in foods){
        console.log(`The customer order: ${Customer.name} call ${foods[index]}`);
        console.log(`The gender of customer is: ${Customer.gender}`)
    }
};
mrHieu.on('eventCallFoods', callBackFunction );
msHuyen.on('eventCallFoods', callBackFunction );

// goi emit: to chuc su kien thi moi dc goi on
mrHieu.emit("eventCallFoods", ["Pizza", "Salad"], mrHieu);
msHuyen.emit("eventCallFoods", ["Pizza", "Salad"], msHuyen);
