import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  // properties
  pageId: string;
  userId: string
  page = {};
  pages: any[];
  name: String;
  description: String;
  websiteId: String;
  errorFlag: boolean;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  deletePage(pageId: string) {
    this.pageService.deletePage(pageId)
        .subscribe((pages) => {
          this.pages = pages;
          this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
        });
    }
    updatePage() {
      if (this.name === null) {
          this.errorFlag = true;
          return;
      }
      this.page = {
        websiteId: this.websiteId,
        name: this.name,
        description: this.description,
        _id: this.pageId
      };
      this.pageService.updatePage(this.pageId, this.page)
          .subscribe((updatePage) => {
            this.page = updatePage;
          });
    }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
              this.pageId = params['pid'];
              this.userId = params['uid'];
              this.websiteId = params['wid'];
            }
        )
    this.page = this.pageService.findPageById(this.pageId);
    this.name = this.page['name'];
    this.description = this.page['description'];
  }

}
