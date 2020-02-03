var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    foodDescription: {
        type: String,
        default: ""
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['available', 'unavailable']
        }],
        default: ['available']
    }
});
// setter: truong name dc gan gia tri moi dc them vao
FoodSchema.path('name').set((inputString) => {
        // chu cai dau tien viet hoa: japan >> Japan 
        return inputString[0].toUpperCase() + inputString.slice(1);
});
module.exports = mongoose.model('Food', FoodSchema);