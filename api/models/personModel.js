const db = require("../../dbConnection");

const Person = {
    getAllPeople:function(callback){

        return db.query("Select * from person",callback);

    },

    getPersonById:function(id,callback){

        return db.query("Select * from person where person_id=?",[id],callback);
    }
};

module.exports = Person;