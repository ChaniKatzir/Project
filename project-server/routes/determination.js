const express = require("express");
const determinationControler= require("../controllers/determination.js");
const determinationRouter = express.Router();

determinationRouter.get("/", determinationControler.findAll);

determinationRouter.get("/:id", determinationControler.findOne);

determinationRouter.put("/:id",determinationControler.update);

determinationRouter.post("/", determinationControler.create);

determinationRouter.delete("/:id",determinationControler.delete);


module.exports = determinationRouter;