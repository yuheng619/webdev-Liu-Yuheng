import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service.client';
import 'rxjs/Rx';

@Injectable()

export class UserService {
    baseUrl = environment.baseUrl;

    constructor(private _http: Http, private sharedService: SharedService, private router: Router) {
    }

    options = new RequestOptions();
    users = [
        {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
        {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
        {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'}
    ];
    api = {
        'createUser': this.createUser,
        'findUserById': this.findUserById,
        'findUserByUsername': this.findUserByUsername,
        'updateUser': this.updateUser,
        'deleteUser': this.deleteUser
    };

    createUser(user: any) {
        /* user._id = '456';
         this.users.push(user);
         return user;*/
        const url = 'http://localhost:3100/api/user/';
        return this._http.post(url, user).map(response => response.json());
    }

    findUserById(userId: string) {
        const url = 'http://localhost:3100/api/user/' + userId;
        return this._http.get(url).map(response => response.json());
    }

    findUserByUsername(username: string) {
        const url = 'http://localhost:3100/api/user?username=' + username;
        return this._http.get(url)
            .map(response => response.json());
        /*for (let x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }*/
    }

    findUserByCredentials(username, password) {
        // for (let x = 0; x < this.users.length; x++) {
        // if (this.users[x].username === username && this.users[x].password === password){
        //        return this.users[x];
        //    }
        // this._http.get('some_url' + ).
        const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
        return this._http.get(url)
            .map(response => response.json());

    }

    updateUser(userId, user) {
        /*for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }*/
        const url = 'http://localhost:3100/api/user/' + userId;
        return this._http.put(url, user)
            .map(response => response.json());
    }

    deleteUser(userId) {
        /*for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                delete this.users[x];
            }
        }*/
        const url = 'http://localhost:3100/api/' + userId;
        return this._http.delete(url)
            .map(response => response.json());
    }

    login(username, password) {
        // this.options.withCredentials = true;
        const body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    logout() {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(
                (res: Response) => {
                    const data = res;
                }
            );
    }

    register(username: String, password: String) {
        this.options.withCredentials = true;
        const user = {
            username: username,
            password: password,
        };

        return this._http.post(this.baseUrl + '/api/register', user)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    loggedIn() {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(
                (res: Response) => {
                    const user = res.json();
                    if (user !== 0) {
                        this.sharedService.user = user;
                        return true;
                    } else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                }
            );
    }
}
