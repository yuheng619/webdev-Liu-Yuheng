var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WidgetSchema = new Schema({
    _page: {type: mongoose.Schema.Types.ObjectId, ref: "pageModel"},
    widgetType: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']},
    name: String,
    text: String,
    placeholder: String,
    description: String,
    url: String,
    width: String,
    height: String,
    rows: Number,
    size: Number,
    class: String,
    icon: String,
    deletable: Boolean,
    formatted: Boolean,
    dataCreated: {type: Date, default: Date.now}
}, {collections: "widget"});
module.exports = WidgetSchema;