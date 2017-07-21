/**
 *
 * Pregnancy Model
 *
 */

const db = require("../../dbConnection");

const pregnancy = {
    getAllPregnancys:(callback) => {

        return db.query("Select * from pregnancy",callback);

    },

    getPregnancyById:(id,callback) => {

        return db.query("select * from pregnancy where pregnancy_id=?",[id],callback);
    }
};

module.exports = pregnancy;