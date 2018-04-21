import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
    selector: 'app-widget-image',
    templateUrl: './widget-image.component.html',
    styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

    // properties
    uid: string;
    wid: string;
    pid: string;
    wgid: string;
    widgets: any[];

    widget = {};
    name: string;
    text: string;
    url: string;
    width: string;
    errorFlag: boolean;
    constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe(
                (params: any) => {
                    this.uid = params['uid'];
                    this.wid = params['wid'];
                    this.pid = params['pid'];
                    this.wgid = params['wgid'];
                    this.widgetService.findWidgetById(this.wgid).subscribe(
                        (widget) => {
                            this.widget = widget;
                            this.name = widget.widgetType;
                            this.text = widget.widgetType;
                            this.width = widget.width;
                            this.url = widget.url;
                        }
                    );
                }
            );
    }

    createImage() {
        if (this.name === null) {
            this.errorFlag = true;
            return;
        }
        const newImage = {
            widgetType: 'IMAGE',
            pageId: this.pid,
            width: this.width,
            url: this.url
        }
        const updateImage = {
            widgetType: 'IMAGE',
            pageId: this.pid,
            width: this.width,
            url: this.url,
            _id: this.wgid
        }
        if (this.wgid) {
            this.widgetService.updateWidget(this.wgid, updateImage)
                .subscribe((widgets: any[]) => {
                    this.widgets = widgets;
                });
        } else {
            this.widgetService.createWidget(this.pid, newImage)
                .subscribe((widgets: any[]) => {
                    this.widgets = widgets;
                });
        }
    }

    deleteImage() {
        this.widgetService.deleteWidget(this.wgid)
            .subscribe((widgets) => {
                this.widgets = widgets;
                this.router.navigate(['/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget']);
            });
    }
}
