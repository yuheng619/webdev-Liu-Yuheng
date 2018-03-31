import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    constructor(private _http: Http) {
    }

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
       const url = '/api/user/';
       return this._http.post(url, user).map(response => response.json());
    }

    findUserById(userId: string) {
        const url = '/api/user/' + userId;
        return this._http.get(url).map(response => response.json());
    }

    findUserByUsername(username: string) {
        const url = '/api/user?username=' + username;
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
        const url = '/api/user?username=' + username + '&password=' + password;
        return this._http.get(url)
            .map(response => response.json());

    }
    updateUser(userId, user) {
        /*for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }*/
        const url = '/api/user/' + userId;
        return this._http.put(url, user)
            .map(response => response.json());
    }

    deleteUser(userId) {
        /*for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                delete this.users[x];
            }
        }*/
        const url = '/api/' + userId;
        return this._http.delete(url)
            .map(response => response.json());
    }
}
