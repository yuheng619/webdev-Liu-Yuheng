import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  // properties
  pageId: string;
  page = {};
  name: String;
  description: String;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
              this.pageId = params['pid'];
            }
        )
    this.page = this.pageService.findPageById(this.pageId);
    this.name = this.page['name'];
    this.description = this.page['description'];
  }

}
