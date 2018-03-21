import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

    widgetId: string;
    widget = {};
    name: string;
    text: string;
    url: string;
    width: string;
    constructor(private widgetService: WidgetService, private activateRoute: ActivatedRoute) { }
  ngOnInit() {
      this.activateRoute.params
          .subscribe(
              (params: any) => {
                this.widgetId = params['wgid'];
              }
          )
      this.widget = this.widgetService.findWidgetById(this.widgetId);
      this.name = this.widget['name'];
      this.text = this.widget['text'];
      this.url = this.widget['url'];
      this.width = this.widget['width'];
  }

}
