const express = require("express");
const filesControler= require("../controllers/transcription_files.js");
const fileRouter = express.Router();


//fileRouter.get("/", filesControler.findAll);//////

//fileRouter.get("/:id",filesControler.findOne);///////

//fileRouter.put("/",filesControler.update);////////

//fileRouter.post("/",filesControler.create);/////////

//fileRouter.delete("/:id",filesControler.delete);////////


module.exports =fileRouter;