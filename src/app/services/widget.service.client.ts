import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class WidgetService {
    constructor() {
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
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    }

    findWidgetsByPageId(pageId: string) {
        const widgets_pageId = [];
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                widgets_pageId.push(this.widgets[x]);
            }
        }
        return widgets_pageId;
    }

    findWidgetById(widgetId: string) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    }

    updateWidget(widgetId, widget) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget;
            }
        }
    }

    deleteWidget(widgetId) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                delete this.widgets[x];
            }
        }
    }
}
