const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var compression = require('compression');


// Parsers
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//Set Port
const port = process.env.PORT || '3000';

app.listen(port);
console.log("Compressed app listening on port " + port);


app.all("/*", function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Cache-Control,Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

// application
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});