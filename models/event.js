let mongoose = require('mongoose');

let EventSchema = new mongoose.Schema({
    name: String,
    updateDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Event', EventSchema);