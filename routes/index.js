const express = require('express')
// const Controller = require('../controllers/controller')
const router = express.Router()
const userRoutes = require("./users")

router.use("/", userRoutes)

module.exports = router