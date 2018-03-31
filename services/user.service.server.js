module.exports = function (app){
    app.post("/api/user", createUser);
    app.get("/api/user/:userId", findUserById);
    app.get("/api/user",findUser);
    app.delete("/api/user/:userId", deleteUser);
    app.put("/api/user/:userId", updateUser);
    // app.get("/api/user", findUserByUsername);

    var users = [
        {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
        {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
        {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'}
    ];

    function createUser(req, res){
         var userId = Math.floor(Math.random()*100 + 100).toString();
         var user = req.body;
         user._id = userId;
         users.push(user);
         res.json(user);
    }

    function findUserById(req, res) {
        var userId = req.params["userId"];
        console.log(users);
        var user = users.find(function (user){
            return user._id === userId;
        });
        res.json(user);
    }

    function deleteUser(req, res){
        var userId = req.params["userId"];
        for (var i = 0; i < users.length; i ++){
            if(users[i]._id === userId) {
                users.splice(i, 1);
            }
        }
        res.json(users);
    }

    function updateUser(req, res){
        var userId = req.params['userId'];
        var newUser = req.body;
        for (var i = 0; i < users.length; i++) {
            if(users[i]._id === userId) {
                users[i] = newUser;
            }
        }
        res.json(users);
    }

    function findUserByCredentials(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        for(var u in users) {
            var user = users[u];
            if(user.username === username && user.password === password) {
                res.json(user);
                return;
            }
        }
        //res.sendStatus(404);
    }

    function findUserByUsername(req, res) {
        var username = req.query["username"];
        for(var u in users) {
            var user = users[u];
            if(user.username === username){
                res.json(user);
                return;
            }
        }
        res.json(users);
    }

    function findUser(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        if(password && username){
            findUserByCredentials(req, res);
        }
        else if(username){
            findUserByUsername(req, res);
        }
    }

};