const {Schema, model, Types} = require('mongoose');

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isActivatedMail: {type: Boolean, default: false},
    activationLink: {type: String},
    notes: [{ type: Types.ObjectId, ref: 'Note' }],
    resetToken: String,
    resetTokenExp: Date,
});

module.exports = model('User', userSchema);