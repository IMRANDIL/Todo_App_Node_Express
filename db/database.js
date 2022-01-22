const mongoose = require('mongoose');



mongoose.connect(process.env.DB_URI);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:🥵'));

db.once("open", function () {
    console.log("Connected successfully😄");
});


module.exports = db;

