// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_chirpy", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  
  /* pool allows to define max & min number of connections, 
   automatically closes database connections, this particular example will close the connection after 10 seconds
  */
  
  pool: { 
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
