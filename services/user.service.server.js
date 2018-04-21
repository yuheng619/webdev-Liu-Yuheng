module.exports = function (app){
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    passport.use(new LocalStrategy(localStrategy));

    const saltRounds = 10;
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    var bcrypt = require("bcrypt-nodejs");
    
    var userModel = require("../model/user/user.model.server");
    app.post("/api/user", createUser);
    app.get("/api/user/:userId", findUserById);
    app.get("/api/user",findUser);
    app.delete("/api/user/:userId", deleteUser);
    app.put("/api/user/:userId", updateUser);
    app.post ('/api/login', login);
    app.post('/api/logout', logout);
    app.post('/api/register', register);
    // app.get("/api/user", findUserByUsername);
    app.get('/api/loggedin', loggedin);

    var users = [
        {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
        {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
        {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'}
    ];


    function login(req, res) {
        var user_login = req.body;
        var username = user_login.username;
        var password = '';
        console.log(username);
        userModel.findUserByUsername(username)
            .then(function(user) {
                password = user.password;
                //console.log(password);
                if (user && bcrypt.compareSync( user_login.password, password)) {
                    //console.log("40");
                    return res.json(user);
                }
                else {
                    //console.log("44");
                    res.status(400).send(user);
                }
            });

    }

    function logout(req, res) {
        req.logout();
        res.send(200);
    }

    function register(req, res) {
        var user = req.body;
        var salt = bcrypt.genSaltSync(saltRounds);
        user.password = bcrypt.hashSync(user.password, salt);
        userModel
            .createUser(user)
            .then(
                function(user){
                    if(user){
                        req.login(user, function(err) {
                            if(err) {
                                console.log(err);
                                res.status(400).send(err);
                            }
                            else {
                                res.json(user);
                            }
                        });
                    }
                }
            );
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }
    function createUser(req, res){
        /* var userId = Math.floor(Math.random()*100 + 100).toString();
         var user = req.body;
         user._id = userId;
         users.push(user);
         res.json(user);*/
        var newUser = req.body;
        userModel
            .createUser(newUser)
            .then(function(user) {
                res.json(user);
            });
    }

    function findUserById(req, res) {
        var userId = req.params["userId"];
        /*console.log(users);
        var user = users.find(function (user){
            return user._id === userId;
        });
        res.json(user);*/

        userModel.findUserById(userId)
            .then(function(user){
                res.json(user);
            });
    }

    function deleteUser(req, res){
        var userId = req.params["userId"];
        /*for (var i = 0; i < users.length; i ++){
            if(users[i]._id === userId) {
                users.splice(i, 1);
            }
        }
        res.json(users);*/
        userModel
            .deleteUser(userId)
            .then(function (status) {
                res.sendStatus(200);
            });
    }

    function updateUser(req, res) {
        var userId = req.params['userId'];
        var newUser = req.body;
        /*for (var i = 0; i < users.length; i++) {
            if(users[i]._id === userId) {
                users[i] = newUser;
            }
        }*/
        userModel
            .updateUser(userId, newUser);
        res.send(newUser);
    }

    function findUserByCredentials(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        userModel
            .findUserByCredentials(username,password)
            .then(function(user) {
                if(user!=null) {
                    res.json(user);
                } else {
                    res.sendStatus(404);
                }
            });
        /*for(var u in users) {
            var user = users[u];
            if(user.username === username && user.password === password) {
                res.json(user);
                return;
            }
        }*/
        //res.sendStatus(404);
    }

    function findUserByUsername(req, res) {
        var username = req.query["username"];
        userModel.findUserByUsername(username)
            .then(function(user) {
                res.json(user);
            });
        res.json(users);
    }

    function findUser(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        if(username && password) {
            var promise = userModel.findUserByCredentials(username, password);
            promise.then(function(user){
                res.json(user);
                console.log(result);
            });
        } else if(username) {
            userModel
                .findUserByUsername(username)
                .then(function(user) {
                    res.json(user);
                });
        }
        /*if(password && username){
            findUserByCredentials(req, res);
        }
        else if(username){
            findUserByUsername(req, res);
        }*/
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel.findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(null, user);
                }
            )
    }

    function localStrategy(username, password, done) {
        userModel
            .findUserByCredentials(username, password)
            .then(
                function(user) {
                    if(user.username === username && user.password === password) {
                        return done(null, user);
                    } else {
                        return done(null,false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }


};