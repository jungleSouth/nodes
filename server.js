const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
fs = require('fs');



//const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//angular dist output folder
app.use(express.static(path.join(__dirname, 'dist')));

//API location
/*app.use('/api', api);*/

//send all other requests to the Angular App
app.get('*', function (req,res) {
   res.sendFile(path.join(__dirname, 'dist/index.html'))
});

//set port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, function(){
  console.log('running on port')
});



