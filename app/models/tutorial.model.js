// module.exports = (sequelize, Sequelize) => {
//   const SecondaryGuidance = sequelize.define("SecondaryGuidance", {
//     word: {
//       type: Sequelize.STRING
//     },
//     POS: {
//       type: Sequelize.STRING
//     },
//     Word_Count: {
//       type: Sequelize.BOOLEAN
//     }
//   });
//
//   return SecondaryGuidance;
// };


const sql = require("./db.js");

const DutyType = function(DutyType){
  this.IDDuty = DutyType.IDDuty
  this.Duty = DutyType.Duty
  
 }

// if you can get req url here than we can acctully do Query based dataset : 
//  WHERE idDuty = '"+ this.idDuty+"';"

DutyType.getAll = result => {
  sql.query("SELECT * FROM Duty", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("dutyType: ", res);
    result(null, res);
  });
};

module.exports = DutyType;