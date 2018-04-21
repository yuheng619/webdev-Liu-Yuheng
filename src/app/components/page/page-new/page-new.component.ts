import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }
  userId: string;
  name: string;
  description: string;
  websiteId: string;
  pageId: string;
  pages: any[];
  errorFlag: boolean;
  createPage() {
    if (this.name === null) {
        this.errorFlag = true;
        return;
    }
    const newPage = {
      _id: this.pageId,
        name: this.name,
        description: this.description,
        websiteId: this.websiteId
    }
    this.pageService.createPage(this.websiteId, newPage)
        .subscribe((pages) => {
          this.pages = pages;
        });
  }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.websiteId = params['wid'];
            this.pageService.findPageByWebsiteId(this.websiteId)
                .subscribe((pages: any[]) => {
                    this.pages = pages;
                });
        });
    }

}
