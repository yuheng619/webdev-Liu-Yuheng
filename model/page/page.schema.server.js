var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PageSchema = new Schema({
    _website: {type: mongoose.Schema.ObjectId, ref: "WebsiteModel"},
    name: String,
    title: String,
    description: String,
    widgets: [{type: mongoose.Schema.ObjectId, ref: "WidgetModel"}],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "page"});
module.exports = PageSchema;