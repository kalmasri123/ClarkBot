var http = require("https");
setInterval(function() {
    http.get("https://donaldclark.herokuapp.com/");
}, 300000); // every 5 minutes (300000)
