// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Chirp = sequelize.define("chirp", {
  author: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  /*we already have a timestamp that is being created. 
  if we did true, sequelize would automatically do this for you and would modify for you (basically unnecessary, but bc we've already done it, declared false)
  */
  timestamps: false 
});

// Syncs with DB
Chirp.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;
