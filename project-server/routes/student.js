const express = require("express");
const studentControler= require("../controllers/student.js");
const studentRouter = express.Router();

studentRouter.get("/",studentControler.findAll);

studentRouter.put("/:id",studentControler.update);//////////

studentRouter.post("/",studentControler.create);

studentRouter.delete("/:id",studentControler.delete);//////////


module.exports =studentRouter;