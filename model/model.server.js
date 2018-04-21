var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds229878.mlab.com:29878/heroku_5czr6h5n';
}
console.log(connectionString);
connectionString = 'mongodb://web_dev:123@ds229878.mlab.com:29878/heroku_5czr6h5n';
var mongoose = require('mongoose');
mongoose.connect(connectionString);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));