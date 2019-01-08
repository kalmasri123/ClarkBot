const http = require('http');
const express = require('express')
const {
  parse
} = require('querystring');

const eventHandler = require("./eventHandler.js")
const bot = require('./app.js')
const server = express()
var path = require('path')
var bodyParser = require('body-parser');
server.use(bodyParser.json()); // support json encoded bodies
server.use(bodyParser.urlencoded({
  extended: true
}));


server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})
const data = {
  'KEY': 'KUDEEMDOHOMWOK'
}

server.post('/', function(req, res) {
  const post = req.body;
  if (post.KEY == data.KEY) {
    eventHandler.em.emit('globalMessage', post.MSG)
    res.end("GRANTED")

  } else {
    res.end("DENIED")
  }
  res.end(post.KEY)
})


server.listen(process.env.PORT||3000);
