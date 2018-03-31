var mongoose = require('mongoose');
var PageSchema = require("./page.schema.server");
var PageModel = mongoose.model("PageModel", PageSchema);
PageModel.findPageById = findPageById;
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;
module.exports = PageModel;

function findPageById(pageId) {
    return PageModel.findById(pageId);
}

function createPage(websiteId, page) {
    page._website = websiteId;
    return PageModel.create(page);
}

function findAllPagesForWebsite(websiteId) {
    return PageModel.find({_website: websiteId});

}

function updatePage(pageId, newPage){
    PageModel.findById(pageId, function(err, page){
        page.set({
            name: newPage.name,
            title: newPage.title,
            description: newPage.description
        });
        return page.save(function (err, newPage){

        });
    })
}

function deletePage(pageId) {
    return PageModel.remove({_id: pageId});
}