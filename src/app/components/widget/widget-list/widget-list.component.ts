import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

    uid: string;
    wid: string;
    pid: string;
    widgets: any;

    constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, protected _sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe(
                (params: any) => {
                    this.uid = params['uid'];
                    this.wid = params['wid'];
                    this.pid = params['pid'];
                    this.widgetService.findWidgetsByPageId(this.pid)
                        .subscribe(
                            (widgets) => {
                                this.widgets = widgets;
                            }
                        );
                }
            );
    }

    santinizeUrl(url: string) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
