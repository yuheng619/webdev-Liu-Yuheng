import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    constructor() {
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
        user._id = '456';
        this.users.push(user);
        return user;
    }

    findUserById(userId: string) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    }

    findUserByUsername(username: string) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    }

    findUserByCredentials(username, password) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password){
                return this.users[x];
            }
        }
    }
    updateUser(userId, user) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }
    }

    deleteUser(userId) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                delete this.users[x];
            }
        }
    }
}
