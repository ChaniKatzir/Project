const express = require("express");
const accessControler= require("../controllers/access.js");
const accessRouter = express.Router();

accessRouter.get("/", accessControler.login);



module.exports = accessRouter;