const http = require('http');
const events = require('events')
const url = require('url')

const {
  parse
} = require('querystring');
const app = require('./app.js')
//create an object of EventEmitter class by using above reference
const eventHandler = require('./eventHandler')
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    collectRequestData(req, result => {
      console.log(result);
      res.end(`
                <!doctype html>
                <html>
                <body>
                    <form action="/" method="post">
                        <input type="text" name="fname" /><br />

                        <button>Save</button>
                    </form>
                </body>
                </html>
            `);
      eventHandler.em.emit('globalMessage', result.fname);

    });
  } else {
    var queryData = url.parse(req.url,true).query
    if(!queryData.key) return res.end(`
            <!doctype html>
            <html>
            <body>
              <h1>ACCESS DENIED. NO KEY</h1>
                </form>
            </body>
            </html>
        `)
    if(!(queryData.key=="KUDEEMDOHOMWOK") return   res.end(`
              <!doctype html>
              <html>
              <body>
                <h1>ACCESS DENIED. WRONG KEY</h1>
                  </form>
              </body>
              </html>
          `);
    res.end(`
            <!doctype html>
            <html>
            <body>
                <form action="/" method="post">
                    <input type="text" name="fname" /><br />

                    <button>Save</button>
                </form>
            </body>
            </html>
        `);
  }
});
server.listen(process.env.PORT || 5000);

function collectRequestData(request, callback) {
  const FORM_URLENCODED = 'application/x-www-form-urlencoded';
  if (request.headers['content-type'] === FORM_URLENCODED) {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    request.on('end', () => {
      callback(parse(body));
    });
  } else {
    callback(null);
  }
}
