// require the library
const mongoose = require("mongoose");
const db_url="mongodb://127.0.0.1:27017/data";

// connecting to the database
mongoose.connect(db_url);

//acquire the connection to check if it is succesfull
const db = mongoose.connection;

// checking the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", function () {
  console.log("successfully connected to database");
});

// exporting a db
module.exports = db;
