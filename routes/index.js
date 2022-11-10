const express = require('express')
// const Controller = require('../controllers/controller')
const router = express.Router()
const userRoutes = require("./users")
const adminRoutes = require("./admin")
const courseRoutes = require("./courses")
const categorieRoutes = require("./categories")

router.use("/", userRoutes)  //login dsb
router.use("/admin", adminRoutes)


// router.use("/course", courseRoutes)
// router.use("/categories", categorieRoutes)

module.exports = router