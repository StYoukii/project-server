let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: Date,
    email: String,
    password: String
});

let User = mongoose.model("User", userSchema);

/**
 * Create
 */
User.create({
    firstName: "Guillaume",
    lastName: "Cottin",
    birthday: "11-02-1991",
    email: "gcottin26@gmail.com",
    password: "gekdnjcd26"
}), function (err) {
    if(err) {
        return console.error(err);
    }
};

/**
 * Read
 */
User.find({
    firstName: "Guillaume"
}), function (err) {
    if(err) {
        return console.error(err);
    }
};