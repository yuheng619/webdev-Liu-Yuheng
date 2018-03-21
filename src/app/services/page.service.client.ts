import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class PageService {
    constructor() {
    }

    pages = [
        { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
        { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
        { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' }
    ];
    api = {
        'createPage': this.createPage,
        'findPageByWebsiteId': this.findPageByWebsiteId,
        'findPageById': this.findPageById,
        'updatePage': this.updatePage,
        'deletePage': this.deletePage
    };

    createPage(websiteId, page) {
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    }

    findPageByWebsiteId(websiteId: string) {
        const pages_websiteId = []
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                pages_websiteId.push(this.pages[x]);
            }
        }
        return pages_websiteId;
    }

    findPageById(pageId: string) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    }

    updatePage(pageId, page) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
            }
        }
    }

    deletePage(pageId) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                delete this.pages[x];
            }
        }
    }
}
