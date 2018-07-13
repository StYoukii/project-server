let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: Date,
    email: String,
    password: String,
    updateDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);