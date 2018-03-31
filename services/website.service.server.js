module.exports = function (app) {
    var WEBSITES = [
        { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
        { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
        { _id: '890', name: 'Gizmodo', developerId: '456', description: 'Lorem' },
        { _id: '456', name: 'Go', developerId: '123', description: 'Lorem' },
        { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
        { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
        { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
    ];

    app.get("/api/user/:userId/website", findWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.post("/api/user/:userId/website", createWebsite);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);


    function findWebsitesForUser(req, res){
        var userId = req.params['userId'];
        var websites = [];
        for (var i = 0; i < WEBSITES.length; i++) {
           if (WEBSITES[i].developerId === userId) {
               websites.push(WEBSITES[i]);
           }
        }
        res.json(websites);
    }

    function findWebsiteById(req, res){
        var websiteId = req.params['websiteId'];
        var website = WEBSITES.find(function (website){
            return website._id === websiteId;
        });
        res.json(website);
    }

    function createWebsite(req, res){
        var userId = req.params['userId'];
        var website = req.body;
        website.developerId =  userId;
        WEBSITES.push(website);
        res.json(WEBSITES);
    }

    function updateWebsite(req, res){
        var websiteId = req.params['websiteId'];
        var newWebsite = req.body;
        for (var i = 0; i < WEBSITES.length; i++) {
            if(WEBSITES[i]._id === websiteId) {
                WEBSITES[i] = newWebsite;
            }
        }
        res.json(WEBSITES);
    }

    function deleteWebsite(req, res){
        var websiteId = req.params['websiteId'];
        for (var i = 0; i < WEBSITES.length; i++){
            if(WEBSITES[i]._id === websiteId){
                WEBSITES.splice(i, 1);
            }
        }
        res.json(WEBSITES);
    }
};
