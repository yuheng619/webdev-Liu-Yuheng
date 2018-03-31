var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({

    username: {type: String, require: true},
    password: {type: String, require:true},
    firstName: String,
    lastName:String,
    email: String,
    phone: String,
    websites: [{type: mongoose.Schema.Types.ObjectId, ref: "WebsiteModel"}],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "user"});
module.exports = UserSchema;