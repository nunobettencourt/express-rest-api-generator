/**
 *
 * User Model
 *
 */

var db = require("../../dbConnection");

var user = {
    getAllUsers:(callback) => {

        return db.query("Select * from user",callback);

    },

    getUserById:(id,callback) => {

        return db.query("select * from user where user_id=?",[id],callback);
    },

    addUser: (user,callback) => {
        return db.query(
            "INSERT INTO user(username, email, password) VALUES (?,?,?)",
            [
                user.username,
                user.email,
                user.password
            ],
            callback
        );
    }
};

module.exports = user;