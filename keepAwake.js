var http = require("https");
setInterval(function() {
    http.get("https:localhost/");
}, 300000); // every 5 minutes (300000)
