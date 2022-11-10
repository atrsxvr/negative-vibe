const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();
const { isUser} = require("../middlewares");

router.get("/", isUser, Controller.homepage);

module.exports = router;
