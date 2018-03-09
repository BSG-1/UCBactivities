// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:op/:num1/:num2", function(req, res) {

 // console.log(operation);
 // console.log('- - - - - - - - - - - - - - - - - - ')
 //  console.log(res);


    
     console.log('- - - - - - - - - - - - - - - - - - ')
  
    var operation = req.params.op;
    var num1 = parseFloat(req.params.num1);
    var num2 = parseFloat(req.params.num2);



  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      // Add your logic here. Pun intended.
     result = num1 + num2;

      break;
    case "subtract":
      // Subtract logic
      result = num1 - num2
      break;
    case "multiply":
      // Multiply
      result = num1 * num2
      break;
    case "divide":
      // Divide
      result = num1 / num2
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);