import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class WebsiteService {
    constructor(private _http: Http) {
    }

    websites = [
        { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
        { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
        { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem' },
        { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },
        { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
        { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
        { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
    ];
    api = {
        'createWebsite': this.createWebsite,
        'findWebsitesByUser': this.findWebsitesByUser,
        'findWebsiteById': this.findWebsitesById,
        'updateWebsite': this.updateWebsite,
        'deleteWebsite': this.deleteWebsite
    };

    createWebsite(userId, website) {
        const url = 'http://localhost:3100/api/user/' + userId + '/website';
        return this._http.post(url, website)
            .map((response: Response) => {
               return response.json();
            });
        /*website.developerId = userId;
        this.websites.push(website);
        return website;*/
    }

    findWebsitesByUser(userId: string) {
        const url = 'http://localhost:3100/api/user/' + userId + '/website';
        return this._http.get(url)
            .map((response: Response) => {
                return response.json();
            });
   /*     const websites_userId = [];
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                websites_userId.push(this.websites[x]);
            }
        }
        return websites_userId;*/
    }

    findWebsitesById(websiteId: string) {
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    }

    updateWebsite(websiteId, website) {
        /*for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
            }
        }*/
        const url = 'http://localhost:3100/api/website/' + websiteId;
        return this._http.put(url, website)
            .map((response: Response) => {
                return response.json;
            });
    }

    deleteWebsite(websiteId: string) {
        const url = 'http://localhost:3100/api/website/' + websiteId;
        return this._http.delete(url)
            .map((response: Response) => {
                return response.json();
            });
        /*for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                delete this.websites[x];
            }
        }*/
    }
}
