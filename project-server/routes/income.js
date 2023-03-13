const express = require("express");
const incomeControler= require("../controllers/income.js");
const incomeRouter = express.Router();

incomeRouter.get("/:id", incomeControler.findOne);

incomeRouter.get("/institute/:id", incomeControler.findAllinst);

incomeRouter.get("/month/:id/:month/:year", incomeControler.findAllmonth);

incomeRouter.get("/", incomeControler.findAll);

incomeRouter.put("/:id",incomeControler.update);

incomeRouter.post("/", incomeControler.create);

incomeRouter.delete("/:id",incomeControler.delete);


module.exports = incomeRouter;