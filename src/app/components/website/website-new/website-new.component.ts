import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website/website.model.client';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }
  userId: string;
  name: string;
  description: string;
  websites: any[];
  errorFlag: boolean;
  createWebsite(name: String) {
    if (name === null) {
      this.errorFlag = true;
      return;
    }
    const website: Website = new Website(name, this.description);
    this._websiteService.createWebsite(this.userId, website)
        .subscribe((websites => {
          this.websites = websites;
        }));
    }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
        this._websiteService.findWebsitesByUser(this.userId)
            .subscribe((websites: any[]) => {
                this.websites = websites;
            });
    });
  }
}
