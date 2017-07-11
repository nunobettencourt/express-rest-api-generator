/**
 *
 * User Model
 *
 */

var db = require("../../dbConnection");

var user = {
    getAllUsers:function(callback){

        return db.query("Select * from user",callback);

    },

    getUserById:function(id,callback){

        return db.query("select * from user where user_id=?",[id],callback);
    },

    addUser: (user,callback) => {
        return db.query(
            "INSERT INTO user(username, email, password) VALUES (?,?,?)",
            [
                user.username,
                Event.email,
                Event.password
            ],
            callback
        );
    }
};

module.exports = user;