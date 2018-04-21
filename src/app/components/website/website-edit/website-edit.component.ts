import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  // properties
  websiteId: string;
  userId: string;
  website = {};
  websites: any[];
  name: string;
  description: string;
  errorFlag: boolean;
  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
  private router: Router) { }

  deleteWebsite(websiteId: string) {
    this._websiteService.deleteWebsite(websiteId)
        .subscribe((websites) => {
          this.websites = websites;
          this.router.navigate(['/user/' + this.userId + '/website']);

        });
  }
  updateWebsite() {
      this.website = {
          name: this.name,
          description: this.description,
          _id: this.websiteId,
          developerId: this.userId
      };
      if (name === null) {
          this.errorFlag = true;
          return;
      }
      this._websiteService.updateWebsite(this.websiteId, this.website)
          .subscribe((updatedWebsite) => {
              this.website = updatedWebsite;
          });
  }
    ngOnInit() {
            this.activatedRoute.params.subscribe(params => {
            this.userId = params['uid'];
            this.websiteId = params['wid'];
            this._websiteService.findWebsitesByUser(this.userId)
                .subscribe((websites: any[]) => {
                    this.websites = websites;
                    for ( let i = 0; i < this.websites.length; i ++) {
                        if (websites[i]._id === this.websiteId) {
                            this.name = websites[i].name;
                            this.description = websites[i].description;
                        }
                    }
                });
        });
    }
}
