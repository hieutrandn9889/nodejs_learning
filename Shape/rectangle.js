// area is a function
// C1 for exports: file khac dung dc
// exports.area = (width, height) => width* height;
// exports.circumference = (width, height) => 2 * (width+height);

// C2 for exports
module.exports = {
    area: (width, height) => width * height,
    circumference: (width, height) => 2*(width+height)
}

// C3 for exports tinh nhieu hon 1 hang >> pho bien
module.exports = {
    area: (width, height) => {
        console.log("Calculating...")
        return width * height
    },
    circumference: (width, height) => {
        console.log("Calculating...")
        return 2*(width+height)
    },
    // currentDateTime is a thuoc tinh (property), not a function
    currentDateTime: Date(),
    directoryName: __dirname,
    fileName: __filename,
}