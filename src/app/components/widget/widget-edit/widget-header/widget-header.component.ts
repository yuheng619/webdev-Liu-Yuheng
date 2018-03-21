import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  // properties
  widgetId: string;
  widget = {};
  name: string;
  text: string;
  size: string;
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
    this.size = this.widget['size'];
  }

}
