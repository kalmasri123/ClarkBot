const request = require('request')

const http = require('https')





var temp = 0;





setInterval(function(){
http.get('https://www.reddit.com/r/pics/new.json?sort=new', (resp) => {
    let data = '';
    ;

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).data.children.length)
      if(temp!=0){

      if(JSON.parse(data).data!=temp){

        http.get('https://www.reddit.com/r/DonaldClark/new.json?sort=new', (resp) => {
            let data = '';
            ;
            
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {

                      request.post('https://donaldclark.herokuapp.com:8000', {
                        json: {
                          todo: JSON.parse(resp).data.children[0])
                        }
                      }, (error, res, body) => {
                        if (error) {
                          console.error(error)
                          return
                        }
                        console.log(`statusCode: ${res.statusCode}`)
                        console.log(body)
                      })



              temp = JSON.parse(data).data.length

            });



        })





      }

      temp = JSON.parse(data).data.length
}else{

  temp=JSON.parse(data).data.length

}



    });



})
},1000
)
