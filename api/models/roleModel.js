/**
 *
 * Role Model
 *
 */

const db = require("../../dbConnection");

const role = {
    getAllRoles:(callback) => {

        return db.query("Select * from role",callback);

    },

    getRoleById:(id,callback) => {

        return db.query("select * from role where role_id=?",[id],callback);
    }
};

module.exports = role;