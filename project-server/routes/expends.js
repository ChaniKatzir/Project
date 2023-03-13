const express = require("express");
const expendsControler= require("../controllers/expends.js");
const expendsRouter = express.Router();



expendsRouter.get("/:id", expendsControler.findOne);

expendsRouter.get("/institute/:id", expendsControler.findAllinst);

expendsRouter.get("/month/:id/:month/:year", expendsControler.findAllmonth);

expendsRouter.get("/", expendsControler.findAll);

expendsRouter.put("/:id",expendsControler.update);

expendsRouter.post("/", expendsControler.create);

expendsRouter.delete("/:id",expendsControler.delete);


module.exports = expendsRouter;