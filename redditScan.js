const request = require('request')

const http = require('https')





var temp;

// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var em =new events.EventEmitter();
module.exports={

  em:em
}




setInterval(function() {
  http.get('https://www.reddit.com/r/DonaldClark/new.json?sort=new', (resp) => {
    let data = '';;

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).data.children[0].data.permalink)
      if (temp) {

        if (JSON.parse(data).data.children[0].data.permalink != temp) {

          temp = JSON.parse(data).data.children[0].data.permalink

          // The whole response has been received. Print out the result.


          em.emit('newReddit', temp);






        } else {}
        temp = JSON.parse(data).data.children[0].data.permalink
      } else {

        temp = JSON.parse(data).data.children[0].data.permalink

      }



    });



  })
}, 1000)
