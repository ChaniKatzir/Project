const express = require("express");
const attendanceControler= require("../controllers/attendance.js");
const attendanceRouter = express.Router();

attendanceRouter.get("/", attendanceControler.findAll);

attendanceRouter.get("/last/:id", attendanceControler.findLast);

attendanceRouter.get("/calender/:id/:year/:month/:day",attendanceControler.findCal);

attendanceRouter.get("/:id", attendanceControler.findAllByPersonId);

attendanceRouter.put("/:id",attendanceControler.update);

attendanceRouter.post("/", attendanceControler.create);

attendanceRouter.delete("/:id",attendanceControler.delete);


module.exports = attendanceRouter;