

const sql = require("./db.js");


const DutyDef = function(DutyDef){
  this.IDDuty = DutyDef.IDDuty
  this.Duty = DutyDef.Duty
  
 }

 
 DutyDef.getAll = result => {
  sql.query("SELECT * FROM definationDuty",(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("dutydef: ", res);
    result(null, res);
  });
};

module.exports = DutyDef;