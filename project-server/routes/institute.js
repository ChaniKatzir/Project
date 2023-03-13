const express = require("express");
const instituteControler= require("../controllers/institute.js");
const instituteRouter = express.Router();


instituteRouter.get("/:id", instituteControler.findOne);

instituteRouter.get("/", instituteControler.findAll);

instituteRouter.put("/:id",instituteControler.update);

instituteRouter.post("/", instituteControler.create);

instituteRouter.delete("/:id",instituteControler.delete);


module.exports = instituteRouter;