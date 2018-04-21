import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  // properties
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget = {};
  name: string;
  text: string;
  size: string;
  widgets: any[];
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
                          this.text = widget.text;
                          this.size = widget.size;
                      }
                  );
              }
          );
  }

    createHeader() {
      if (this.name === null) {
          this.errorFlag = true;
          return;
      }
      const newHead = {
          widgetType: 'HEADING',
          pageId: this.pid,
          size: this.size,
          text: this.text
      }
      const updateHead = {
          widgetType: 'HEADING',
          pageId: this.pid,
          size: this.size,
          text: this.text,
          _id: this.wgid
      }
      if (this.wgid) {
          this.widgetService.updateWidget(this.wgid, updateHead)
              .subscribe((widgets: any[]) => {
                  this.widgets = widgets;
              });
      } else {
          this.widgetService.createWidget(this.pid, newHead)
              .subscribe((widgets: any[]) => {
                  this.widgets = widgets;
              });
      }
    }

    deleteHeader() {
        this.widgetService.deleteWidget(this.wgid)
            .subscribe((widgets) => {
                this.widgets = widgets;
                this.router.navigate(['/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget']);
            });
    }

}
