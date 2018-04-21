import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


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
  password: string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,  private router: Router) { }


  updateUser() {
      this.user = {
          username: this.username,
          password: this.password,
          firstName: this.firstname,
          lastName: this.lastname,
          _id: this.uid
      };
      this.userService.updateUser(this.uid, this.user)
          .subscribe((updateUser) => {
              this.user = updateUser;
          });
  }
  logout() {
      this.userService.logout()
          .subscribe(
              (data: any) => this.router.navigate(['/login'])
          );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.userService.findUserById(this.uid)
          .subscribe((user: any) => {
            this.user = user;
            this.username = this.user['username'];
            this.email = this.user['email'];
            this.firstname = this.user['firstName'];
            this.lastname = this.user['lastName'];
          });
      });
  }
}
