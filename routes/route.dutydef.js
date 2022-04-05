module.exports = app => {

    const DutyDef = require("../controllers/controller.Dutydef.js")
    app.get("/dutydef", DutyDef.findAll);
  
    // const DutyType = require("../controllers/controller.js");
  
    // // Retrieve all
    // app.get("/DutyType", DutyType.findAll);
  
  
  };