var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://www.amazon.com/")
  .type("#twotabsearchtextbox", "bmw emblem")
  .click(".nav-input")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
