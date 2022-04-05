module.exports = app => {
    const sql = require("../models/db.js");
    var idDuty = ""

    const DutyType = function(DutyType){
      this.IDDuty = DutyType.IDDuty
      this.Duty = DutyType.Duty
      
     }
    
    DutyType.getAll =  result  => {
      sql.query("SELECT * FROM Regulations", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        result(null, res);
      });
    };
    
    DutyType.findAll = (req, res) => {
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
    app.get("/Prod/Regulations", DutyType.findAll
        
    );
  };