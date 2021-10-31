const {Schema, model, Types} = require('mongoose');

const foodShema = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},
    foodId: {type: String, default: null},
    scale: {type: Number, default: 100},
    searchFood: {type: Boolean, default: false},
    label: {type: String, required: true},
    CHOCDF: {type: Number, default: 0},
    PROCNT: {type: Number, default: 0},
    FAT: {type: Number, default: 0},
    ENERC_KCAL: {type: Number, default: 0},
    FIBTG: {type: Number, default: 0},
});

module.exports = new model('Food', foodShema);
