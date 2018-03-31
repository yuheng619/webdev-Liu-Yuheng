var mongoose = require('mongoose');
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);
UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.deleteUser = deleteUser;
UserModel.updateUser = updateUser;
module.exports = UserModel;

function findUserByUsername(username) {
    return UserModel.findOne({username:username});
}

function findUserById(userId) {
    return UserModel.findById(userId);
}

function findUserByCredentials(username, password) {
     return UserModel.findOne({username: username, password:password});
}

function createUser(user) {
    console.log(user);
    return UserModel.create(user);
}

function deleteUser(userId) {
    return UserModel.remove({_id: userId}, function(err){
        if(err) console.log("err");
    });
}

function updateUser(userId, newUser) {
    UserModel.findById(userId, function(err, user){
        user.set({
            username: newUser.username,
            password: newUser.password,
            firstName: newUser.firstName,
            lastName: newUser.lastName
        });
        return user.save(function (err, newUser){
        });

    });
   /* UserModel.update({_id: userId}, {

    });*/
}