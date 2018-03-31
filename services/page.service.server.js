module.exports = function (app) {
    var PAGES = [
        { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
        { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
        { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' },
        { _id: '654', name: 'Post 4', websiteId: '678', description: 'Lorem' }
    ];

    var pageModel = require("../model/page/page.model.server");
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findPageByWebsiteId);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res){
        var websiteId = req.params['websiteId'];
        var page = req.body;
        /*page.websiteId = websiteId;
        PAGES.push(page);
        res.json(PAGES);*/
        pageModel
            .createPage(websiteId, page)
            .then(function(page){
                res.json(page);
        });
    }

    function findPageByWebsiteId(req, res){
        var websiteId = req.params['websiteId'];
        /*var pages = [];
        for (var i = 0; i < PAGES.length; i++){
            if(PAGES[i].websiteId === websiteId){
                pages.push(PAGES[i]);
            }
        }
        res.json(pages);*/
        pageModel.findAllPagesForWebsite(websiteId)
            .then(function (pages) {
                res.json(pages);
            });
    }

    function findPageById(req, res){
        var pageId = req.params['pageId'];
        /*var page = PAGES.find(function (page){
            return page._id === pageId;
        });
        res.json(page);*/
        pageModel.findPageById(pageId)
            .then(function(page){
                res.json(page);
            })
    }

    function updatePage(req, res){
        var pageId = req.params['pageId'];
        var newPage = req.body;
        /*for (var i = 0; i < PAGES.length; i++) {
            if(PAGES[i]._id === pageId) {
                PAGES[i] = newPage;
            }
        }
        res.json(PAGES);*/
        pageModel
            .updatePage(pageId, newPage);
        res.send(newPage);
    }

    function deletePage(req, res){
        var pageId = req.params['pageId'];
        /*for(var i = 0; i < PAGES.length; i ++){
            if(PAGES[i]._id === pageId){
                PAGES.splice(i, 1);
            }
        }
        res.json(PAGES);*/
        pageModel
            .deletePage(pageId)
            .then(function(status) {
                res.sendStatus(200);
            })
    }

};