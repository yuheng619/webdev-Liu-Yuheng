import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

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
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.userId = params['uid'];
        }
    );
    this.website = this.websiteService.findWebsitesById(this.websiteId);
    this.name = this.website['name'];
    this.description = this.website['description'];
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }
}
