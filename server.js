var express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next()

});
const port = process.env.PORT || '3100';
app.set('port', port);
const server = http.createServer(app);
var user = require("./services/user.service.server");
user(app);

var website = require("./services/website.service.server");
website(app);

var page = require("./services/page.service.server");
page(app);

var widget = require("./services/widget.service.server");
widget(app);
app.use(express.static('dist'));
server.listen( port );