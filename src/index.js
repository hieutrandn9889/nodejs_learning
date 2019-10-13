// install babel: npm install --save-dev babel-cli
// install plugin: npm install --save-dev babel-preset-es2015 babel-preset-stage-2
// install nodemon: npm install --save-dev nodemon  tha doi trong code và cập nhập ngay lập tức
let http = require('http');
const port = 3001;
const server = http.createServer((request, response) =>{
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    response.write(`Request's url: ${request.url} \r\n`);
    response.end();
}).listen(port);
console.log(`Server is running on port: ${port}.`)

// READ FILE JSON
console.log("Working with files")
var fileManager = require('./fileManager');
const fileName  = __dirname + '/../data/temp.txt';
fileManager.createNewFile(fileName);
let jsonObject = {
    foods: [
        {
            foodName: "Cream Tea",
            foodDescription: "This is a cup of cream tea"
        },
        {
            foodName: "Japanese Salad",
            foodDescription: "Very delicious Japanese Salad"
        },
        {
            foodName: "Korean Kimchi",
            foodDescription: "Traditional Korean Food"
        },
        {
            foodName: "Fresh mushroom",
            foodDescription: "Fresh mushroom with vegetables"
        },
        {
            foodName: "Oysters",
            foodDescription: "Oysters with ice rock"
        },
        {
            foodName: "Multiple salad",
            foodDescription: "Salad mixed with mushroom"
        },
        {
            foodName: "Vegetable",
            foodDescription: "Fresh vegetables"
        }
    ],
    resultCode: 200,
    restaurantName: "Sasimi BBQ"
};
jsonObject.address = "99 to hien thanh, da nang, Vietnam";
fileManager.saveJsonObjectToFile(jsonObject, fileName);
fileManager.readJsonObjectFromFile(fileName);

//EVENT
