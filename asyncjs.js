const YouTube = require('simple-youtube-api');
var async = require("async")
var youtube=new YouTube("AIzaSyB2iOTnJY9EOOsCms_ScZPI6VG9S4l1lTo")

let resultval;


let getYT = () => {
  return new Promise((resolve,reject) => {
    youtube.searchVideos('Centuries', 4)
    .then(results => {
        resultval = results;
        resolve(results)
    })

  })
}
 getYT().then(resolve=>{
    console.log(resultval)

})
