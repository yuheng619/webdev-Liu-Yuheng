export class User {
    _id: String;
    name: String;
    password: String;
    constructor(_id: String, name: String, password: String) {
        this._id = _id;
        this.name = name;
        this.password = password;
    }
}
