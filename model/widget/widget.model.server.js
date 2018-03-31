var mongoose = require('mongoose');
var WidgetSchema = require("./widget.schema.server");
var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;
module.exports = WidgetModel;

function findWidgetById(widgetId) {
    return WidgetModel.findById(widgetId);
}

function createWidget(pageId, widget) {
    widget._page = pageId;
    return WidgetModel.create(widget);
}

function findAllWidgetsForPage(pageId) {
    return WidgetModel.find({_page: pageId});
}

function updateWidget(widgetId, newWidget){
    WidgetModel.findById(widgetId, function(err, widget){
        widget.set({
            widgetType: newWidget.widgetType,
            name: newWidget.name,
            text: newWidget.text,
            placeholder: newWidget.placeholder,
            description: newWidget.description,
            url: newWidget.url,
            width: newWidget.width,
            height: newWidget.height,
            rows: newWidget.rows,
            size: newWidget.size,
            class: newWidget.class,
            icon: newWidget.icon,
            deletable: newWidget.deletable,
            formatted: newWidget.formatted
        });
        return widget.save(function (err, newWidget){

        });
    })
}

function deleteWidget(widgetId) {
    return WidgetModel.remove({_id: widgetId});
}

function reorderWidget(pageId, start, end){
    WidgetModel.findAllWidgetsForPage(pageId)
        .then(function (widgets) {
            var widget = widgets[start];
            widgets.splice(start, 1);
            widgets.splice(end, 0, widget);
            return;
        })
}