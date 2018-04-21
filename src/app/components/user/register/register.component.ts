import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  confirmedpassword: string;
  errorFlag: boolean;
  errorMsg: 'passwords do not match!';
  createUser() {
    if (this.password !== this.confirmedpassword) {
      this.errorFlag = true;
      return;
    }
    const newUser = {
      username: this.username,
      password: this.password,
  }
  this.userService.register(this.username, this.password).subscribe(
      (user) => {
        this.userId = user._id;
        this.router.navigate(['/user/', this.userId]);
      }
      );
  }


  ngOnInit() {
  }

}
