const fs = require('fs');
module.exports = {
    createNewFile: (fileName) => {
        const fd = fs.openSync(fileName, 'w');//fd = file descriptor // mo file roi moi sang lenh tiep theo dung openSync
    },
    // luu doi tuong vao file
    // stringify biến 1 object thành string
    saveJsonObjectToFile: (obj, fileName) => {
        const jsonString = JSON.stringify(obj);
        fs.writeFile(fileName, jsonString, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(`Saved to file ${fileName}`);
        });
    },
    // doc du lieu tu file ra
    readJsonObjectFromFile: (fileName) => {
        //Asynchronously reads the entire contents of a file
        // readFile k dong bo: qua trinh doc tach ra tien trinh rieng... chay tiep cac lenh khac
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;// nhay ra if error
            let jsonObject = JSON.parse(data);
            console.log(`jsonObject.foods = ${JSON.stringify(jsonObject.foods)}`);
            console.log(`jsonObject.resultCode = ${JSON.stringify(jsonObject.resultCode)}`);
            console.log(`jsonObject.restaurantName = ${JSON.stringify(jsonObject.restaurantName)}`);
            console.log(`jsonObject.address = ${JSON.stringify(jsonObject.address)}`);
        });
    }
};