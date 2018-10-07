var blessings= require('./blessings.json')

var fs= require("fs")

module.exports={

addBless:function(id){


if(!blessings[id]){

  blessings[id]=0;



}
blessings[id]+=1;
console.log(blessings)

fs.writeFile("./blessings.json", JSON.stringify(blessings), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});



}



}
