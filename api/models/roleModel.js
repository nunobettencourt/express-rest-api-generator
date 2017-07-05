/**
 *
 * Role Model
 *
 */

var db = require("../../dbConnection");

var role = {
    getAllRoles:function(callback){

        return db.query("Select * from role",callback);

    },

    getRoleById:function(id,callback){

        return db.query("select * from role where role_id=?",[id],callback);
    }
};

module.exports = role;