import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }
  userId: string;
  username: string;
  password: string;
  createUser() {
    const newUser = {
      username: this.username,
      password: this.password
  }
  this.userService.createUser(newUser).subscribe(
      (user) => {
        this.userId = user._id;
        this.router.navigate(['/user/', this.userId]);
      });
  }

  ngOnInit() {
  }

}
