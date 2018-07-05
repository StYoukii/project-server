let mongoose = require('mongoose');

console.log("Mongoose version : " + mongoose.version);

// Connexion à la base de données
mongoose.connect("mongodb://StYoukii:gekdnjcd26@ds121871.mlab.com:21871/project");

mongoose.connection.on("error", function () {
    console.log("Database connection error...");
});

mongoose.connection.on("open", function () {
    console.log("Database connection open !");
})
