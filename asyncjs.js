const YouTube = require('simple-youtube-api');
var async = require("async")
var youtube=new YouTube("AIzaSyB2iOTnJY9EOOsCms_ScZPI6VG9S4l1lTo")

let resultval;
async function search(){
let YT = await youtube.searchVideos('',4);
console.log(YT)
}
search()