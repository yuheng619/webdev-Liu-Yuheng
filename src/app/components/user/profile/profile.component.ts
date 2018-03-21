import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // properties
  uid: string;
  user = {};
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
              this.uid = params['uid'];
            }
        );
  this.user = this.userService.findUserById(this.uid);
  this.username = this.user['username'];
  this.email = this.user['email'];
  this.firstname = this.user['firstName'];
  this.lastname = this.user['lastName'];
  }
}
