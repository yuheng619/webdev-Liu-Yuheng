import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {
  wid: string;
  name: any[];
  pages: any[];
  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
      this.activatedRoute.params
          .subscribe(
              (params: any) => {
                  this.wid = params['wid'];
              }
          );

      this.pages = this._pageService.findPageByWebsiteId(this.wid);
  }

}
