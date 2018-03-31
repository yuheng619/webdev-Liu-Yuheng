module.exports = function (app){
    var WIDGETS = [
        { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
        { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
        { _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
            url: 'http://lorempixel.com/400/200/'},
        { _id: '456', widgetType: 'HTML', pageId: '321', text: 'Lorem ipsum'},
        { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
        { _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
            url: 'https://www.youtube.com/embed/7t2Lu4t6n4E' },
        { _id: '789', widgetType: 'HTML', pageId: '321', text: 'Lorem ipsum'}
    ];

    var widgetModel = require("../model/widget/widget.model.server");
    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    function createWidget(req, res){
        var pageId = req.params['pageId'];
        var widget = req.body;
        /*var widgetId = Math.floor(Math.random()*100 + 100).toString();
        widget.pageId = pageId;
        widget._id = widgetId;
        WIDGETS.push(widget);
        console.log(WIDGETS);
        res.json(WIDGETS);*/
        widgetModel
            .createWidget(pageId, widget)
            .then(function(widget){
                res.json(widget);
            });
    }

    function findAllWidgetsForPage(req, res){
        var pageId = req.params['pageId'];
        /*var widgets = [];
        for (var i = 0; i < WIDGETS.length; i++){
            if(WIDGETS[i].pageId === pageId){
                widgets.push(WIDGETS[i])
            }
        }
        console.log(widgets);
        res.json(widgets);*/
        widgetModel.findAllWidgetsForPage(pageId)
            .then(function (widgets) {
                res.json(widgets);
            })
    }

    function findWidgetById(req, res){
        var widgetId = req.params['widgetId'];
        /*var widget = WIDGETS.find(function (widget){
            return widget._id === widgetId;
        });
        res.json(widget);*/
        widgetModel.findWidgetById(widgetId)
            .then(function(widget){
                res.json(widget);
            })
    }

    function updateWidget(req, res){
        var widgetId = req.params['widgetId'];
        var newWidget = req.body;
        /*for (var i = 0; i < WIDGETS.length; i++) {
            if (WIDGETS[i]._id === widgetId) {
                WIDGETS[i] = newWidget;
            }
        }
        res.json(WIDGETS);*/
        widgetModel
            .updateWidget(widgetId, newWidget);
        res.send(newWidget);
    }


    function deleteWidget(req, res){
        var widgetId = req.params['widgetId'];
        /*for (var i = 0; i < WIDGETS.length; i ++){
            if (WIDGETS[i]._id === widgetId){
                WIDGETS.splice(i,1);
            }
        }
        res.json(WIDGETS);*/
        widgetModel
            .deleteWidget(widgetId)
            .then(function(status) {
                res.sendStatus(200);
            })
    }

    function reorderWidget(req, res){
        var pageId = req.params['pageId'];
        var start = req.body['start'];
        var end = req.body['end'];
        widgetModel.reorderWidget(pageId,start, end)
            .then(function(widgets){
                res.json(widgets);
            })
    }
};