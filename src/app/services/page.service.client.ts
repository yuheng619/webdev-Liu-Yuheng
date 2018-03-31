import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class PageService {
    constructor(private _http: Http) {
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
        const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
        return this._http.post(url, page)
            .map((response: Response) => {
                return response.json();
            });
    }

    findPageByWebsiteId(websiteId: string) {
        const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
        return this._http.get(url)
            .map((response: Response) => {
                return response.json();
            });
        /*const pages_websiteId = []
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                pages_websiteId.push(this.pages[x]);
            }
        }
        return pages_websiteId;*/
    }

    findPageById(pageId: string) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    }

    updatePage(pageId, page) {
        const url = 'http://localhost:3100/api/page/' + pageId;
        return this._http.put(url, page)
            .map((response: Response) => {
                return response.json;
            });
        /*for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
            }
        }*/
    }

    deletePage(pageId) {
        const url = 'http://localhost:3100/api/page/' + pageId;
        return this._http.delete(url)
            .map((response: Response) => {
                return response.json();
            });
    }
}
