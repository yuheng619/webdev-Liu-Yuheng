import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class WidgetService {
    constructor(private _http: Http) {
    }

    widgets = [
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
    api = {
        'createWidget': this.createWidget,
        'findWebsitesByUser': this.findWidgetsByPageId,
        'findWebsiteById': this.findWidgetById,
        'updateWebsite': this.updateWidget,
        'deleteWebsite': this.deleteWidget
    };

    createWidget(pageId, widget) {
        const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
        return this._http.post(url, widget).map(response => response.json());
    }

    findWidgetsByPageId(pageId: string) {
        const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
        return this._http.get(url).map(response => response.json());
    }

    findWidgetById(widgetId: string) {
        const url = 'http://localhost:3100/api/widget/' + widgetId;
        return this._http.get(url).map(response => response.json());
    }

    updateWidget(widgetId, widget) {
        const url = 'http://localhost:3100/api/widget/' + widgetId;
        return this._http.put(url, widget)
            .map(response => response.json());
    }

    deleteWidget(widgetId) {
        const url = 'http://localhost:3100/api/widget/' + widgetId;
        return this._http.delete(url)
            .map(response => response.json());
    }
}
