var blessings= require('./blessings.json')

var fs= require("fs")
var MongoClient = require('mongodb').MongoClient;
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');



var mongodbDatabase = 'world';

// connect string for mongodb server running locally, connecting to a database called test
var url = 	process.env.MONGODB_URI




module.exports={

addBless:function(id,nickN){

MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("heroku_74r890t6");



  dbo.collection("blessingCounter").find({user:id}).toArray(function(err, blessings) {

      if (err) throw err;




if(blessings.length==0){
var myobj={user:id,score:0,name:nickN}

  dbo.collection("blessingCounter").insertOne(myobj, function(err, res) {
    if (err) throw err;

    console.log("1 document inserted");
})


}

console.log(blessings[0])
dbo.collection("blessingCounter").find({user:id}).toArray(function(err, blessings) {
  var newvalues = { $set: { score:blessings[0].score+1 } };
  dbo.collection("blessingCounter").updateOne({user:id}, newvalues, function(err, res) {
      if (err) throw err;

      console.log("1 document updated");

  db.close()

  })
})


})

})

}
}
