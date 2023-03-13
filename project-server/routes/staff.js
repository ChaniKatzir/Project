const express = require("express");
const staffControler= require("../controllers/staff.js");
const staffRouter = express.Router();

staffRouter.get("/", staffControler.findAll);

staffRouter.put("/:id",staffControler.update);

staffRouter.post("/",staffControler.create);

staffRouter.delete("/:id",staffControler.delete);


module.exports =staffRouter;
