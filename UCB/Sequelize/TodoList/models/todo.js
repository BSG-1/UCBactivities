// //create a todo model with columns for "text" (DataTypes.STRING), "complete" (DataTypes.BOOLEAN)


// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/config.json");

// // Creates a "Book" model that matches up with DB
// var todo = sequelize.define("todo", {
//   text: {
//     type: Sequelize.STRING
//   },
//   complete: {
//     type: Sequelize.BOOLEAN
//   },
// }, {
//   timestamps: false
// });

// // Syncs with DB
// todo.sync();

// // Makes the Book Model available for other files (will also create a table)
// module.exports = todo;

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: {
    			args: [1, 140],
    			msg: "Must be between 1 and 140 characters!"
    		}
    	}
    },
    complete: {
    	type: DataTypes.BOOLEAN,
    	default: false
    }
    	
  });
  return Todo;
};
