const request = require('request')

const http = require('https')





var temp;





setInterval(function() {
  http.get('https://www.reddit.com/r/KudeemTest/new.json?sort=new', (resp) => {
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


          request.post({
      url: "http://localhost:8000/",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"longUrl": "http://www.google.com/"})
      });






        } else {}
        temp = JSON.parse(data).data.children[0].data.permalink
      } else {

        temp = JSON.parse(data).data.children[0].data.permalink

      }



    });



  })
}, 1000)
