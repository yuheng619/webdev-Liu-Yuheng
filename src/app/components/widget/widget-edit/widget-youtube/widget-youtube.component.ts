import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

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
    constructor(private widgetService: WidgetService, private activateRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
      this.activateRoute.params
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

    createYoutube() {
        if (this.name === null) {
            this.errorFlag = true;
            return;
        }
        const newYoutube = {
            widgetType: 'YOUTUBE',
            pageId: this.pid,
            width: this.width,
            url: this.url,
        }
        const updateYoutube = {
            widgetType: 'YOUTUBE',
            pageId: this.pid,
            width: this.width,
            url: this.url,
            _id: this.wgid
        }
        if (this.wgid) {
            this.widgetService.updateWidget(this.wgid, updateYoutube)
                .subscribe((widgets: any[]) => {
                    this.widgets = widgets;
                });
        } else {
            this.widgetService.createWidget(this.pid, newYoutube)
                .subscribe((widgets: any[]) => {
                    this.widgets = widgets;
                });
        }
    }

    deleteYoutube() {
        this.widgetService.deleteWidget(this.wgid)
            .subscribe((widgets) => {
                this.widgets = widgets;
                this.router.navigate(['/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget']);
            });
    }

}
