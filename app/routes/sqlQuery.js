
module.exports = app => {
    const sql = require("../models/db.js");
    var idDuty = ""

    const DutyType = function(DutyType){
      this.IDDuty = DutyType.IDDuty
      this.Duty = DutyType.Duty
      
     }
    
    DutyType.getAll =  result  => {
      // CFR and PART replace PART with \nPART 
      // IF CFR 
      sql.query("SELECT * FROM Definition WHERE idDuty = \""+ this.idDuty.replace(/"/g,'\\"')+"\";", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log("dutyType: ", res);
        result(null, res);
      });
    };
    
    DutyType.findAll = (req, res) => {
        console.log(req.query.idDuty)
        this.idDuty = req.query.idDuty
        DutyType.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving duty."
            });
            else res.send(data);
            });
        };
    
    // Retrieve all
    app.get("/DutyDefSql", DutyType.findAll
        
    );
  };
  