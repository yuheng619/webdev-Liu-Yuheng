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
  uid: string;
  pid: string;
  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
      this.activatedRoute.params
          .subscribe(
              (params: any) => {
                  this.wid = params['wid'];
                  this.uid = params['uid'];
                  // this.pid = params['pid'];
              }
          );

      this._pageService.findPageByWebsiteId(this.wid)
          .subscribe((pages: any[]) => {
              this.pages = pages;
          });
  }

}
