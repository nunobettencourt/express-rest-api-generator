var db = require("../../dbConnection");

var Team = {
    getAllTeams:(callback) => {

        return db.query("Select * from team",callback);

    },

    getTeamById:(id,callback) => {

        return db.query("select * from team where team_id=?",[id],callback);
    },

    getTeamMembers:(id, callback) => {

        return db.query(
            "SELECT " +
            "person.person_id AS person_id, " +
            "person.firstname As person_firstname, " +
            "person.lastname As person_lastname " +
            "FROM team_person " +
            "INNER JOIN person ON team_person.person_id = person.person_id " +
            "WHERE person.status = 1 " +
            "AND team_person.team_id = ?", [id],
            callback
        );
    }
};

module.exports = Team;