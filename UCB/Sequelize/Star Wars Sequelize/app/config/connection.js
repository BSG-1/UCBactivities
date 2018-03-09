// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package

var Sequelize = require("sequelize");

// Setting up our connection information
var sequelize = new Sequelize("starwars", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
})

module.exports = sequelize;

// // Creating our connection
// var connection = mysql.createConnection(source.localhost);


// // Connecting to the database.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Exporting our connection
// module.exports = connection;
