// JavaScript source code
var settings = require('./settings.json');
var messages = ["**Bless You**", "**Very very good post**", "**Thats exactly right**", "**Clear your desks**","**Bless you My Child**"];

const https = require('https');
const Discord = require('discord.js');
const client = new Discord.Client();
var MongoClient = require('mongodb').MongoClient;


var scorekeeper=require("./blessings.json")




var scorekeeping=require('./scorekeeping')


  client.on('presenceUpdate',(oldMember,newMember)=>{
if(newMember.presence.game){
  if(newMember.presence.game.name=="Fortnite"){
oldMember.sendMessage("**Taking Ten Minutes out of Fortnite will lead to Better grades on your Pop Test**")

}s
console.log(newMember.presence.game.name)


}





  })
client.on('message', message => {
let args= message.content.split(" ")
function firstReq(){

  https.get('https://www.reddit.com/r/DonaldClark/random.json', (resp) => {
      let data = '';
      ;

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
          data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {

          let url = resp.headers.location;
console.log(data)

secondReq(url)

      });



  }).on("error", (err) => {
      console.log("Error: " + err.message);
  });






}

    if (message.content == "%clark") {

  const random = Math.random(0, messages.length)

        message.channel.send(messages[Math.floor(Math.random() * Math.floor(messages.length-1))]);
firstReq()
    }





    function secondReq(link){
    https.get(link,(res)=>{


      let data = '';
      ;

      // A chunk of data has been recieved.
      res.on('data', (chunk) => {
          data += chunk;
      });

      //  whole response has been received. Print out the result.
      res.on('end', () => {
        console.log(!JSON.parse(data)[0].data.children[0].data.url.endsWith('.jpg'))
if(!JSON.parse(data)[0].data.children[0].data.url.endsWith('.jpg')){


firstReq()



}else
{

message.channel.send( JSON.parse(data)[0].data.children[0].data.url)
console.log("Hello")
}



    })

  })
}










//Scorekeeper




if(args[0]=="%bless"){


if(args.length>2||args.length<2){

 message.reply("**Two Words Only**")


}else{

//Correct Args.length
message.reply("**Bless You, My Child!**")




if(message.mentions){
scorekeeping.addBless(message.mentions.members.first().id)





}






}






}

if(args[0]=="%scoreboard"){

let i = 0;
var field=[]
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var cloud = false;

var mongodbHost = '127.0.0.1';
var mongodbPort = '27017';

var authenticate ='';
//cloud


var mongodbDatabase = 'world';

// connect string for mongodb server running locally, connecting to a database called test
var url = 	process.env.MONGODB_URI


MongoClient.connect(url, function(err, db) {
  var dbo = db.db("heroku_74r890t6");
i=0;

      dbo.collection("blessingCounter").find({}).toArray(function(err, blessings) {
console.log(blessings)
for(var key in blessings){
console.log(key)
console.log(message.guild.members.get(blessings[key].user).user.username)

field[i]={name:message.guild.members.get(blessings[key].user).user.username,value:blessings[key].score.toString()}

i++
}
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "**Blessings**",
    url: "",
    description: "Uh The competition",
    fields:field,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});











})})

}
})
client.login(process.env.token)
/*
 * Uhhhhh very very gud
 * bless you
 * */
