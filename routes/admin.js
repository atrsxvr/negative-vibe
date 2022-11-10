const express = require('express')
const Controller = require('../controllers/adminController')
const router = express.Router()
const {isAdmin, isLogin} = require("../middlewares")

router.get("/", isAdmin, Controller.homepage)

module.exports = router