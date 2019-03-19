var http = require("https");
setInterval(function() {
    http.get("https://clarkbot23.herokuapp.com/");
}, 300000); // every 5 minutes (300000)
