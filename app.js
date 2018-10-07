// JavaScript source code
var settings = require('./settings.json');

const https = require('https');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {

    if (message.content == "%clark") {

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
                message.channel.send("**Bless You**")
                message.channel.send(url.split(".json")[0]);
            });


        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }
})

client.login(process.env.token)
