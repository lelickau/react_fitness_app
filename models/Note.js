const {Schema, model, Types} = require('mongoose');

const noteShema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    marking: {type: String, required: true},
    status: {type: String, required: true},
    date: {type: Date, default: Date.now},
    owner: {type: Types.ObjectId, ref: 'User'},
    completed: false,
    important: false,
});

module.exports = model('Note', noteShema);