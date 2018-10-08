var blessings= require('./blessings.json')

var fs= require("fs")
const MongoClient = require('mongoose');
var url = 'mongodb://localhost:27017';


module.exports={

addBless:function(id){

MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("mydb");



  dbo.collection("blessingCounter").find({user:id}).toArray(function(err, blessings) {

      if (err) throw err;




if(blessings.length==0){
var myobj={user:id,score:0}

  dbo.collection("blessingCounter").insertOne(myobj, function(err, res) {
    if (err) throw err;

    console.log("1 document inserted");
})


}

console.log(blessings[0])
  var newvalues = { $set: { score:blessings[0].score+1 } };
dbo.collection("blessingCounter").updateOne({user:id}, newvalues, function(err, res) {
    if (err) throw err;

    console.log("1 document updated");

db.close()

})

})

})

}
}
