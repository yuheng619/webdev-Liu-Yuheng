var mongoose = require('mongoose');
var WebsiteSchema = require("./website.schema.server");
var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;
module.exports = WebsiteModel;

function findWebsiteById(websiteId) {
    return WebsiteModel.findById(websiteId);
}

function createWebsiteForUser(userId, website) {
    website._user = userId;
    return WebsiteModel.create(website);
}

function findAllWebsitesForUser(userId){
    return WebsiteModel.find({_user: userId});
}

function updateWebsite(websiteId, newWebsite){
    WebsiteModel.findById(websiteId, function(err, website){
        website.set({
            name: newWebsite.name,
            description: newWebsite.description
        });
        return website.save(function (err, newWebsite){

        });
    })
}

function deleteWebsite(websiteId) {
    return WebsiteModel.remove({_id: websiteId});
}