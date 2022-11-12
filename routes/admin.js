const express = require('express')
const Controller = require('../controllers/adminController')
const router = express.Router()
const {isAdmin, isLogin} = require("../middlewares")

router.get("/", isAdmin, Controller.homepage)
router.get("/addCourse", isAdmin, Controller.addCourse)
router.post("/addCourse", isAdmin, Controller.submitAddCourse)
router.get("/:courseId/edit", Controller.editCourse)
router.post("/:courseId/edit", Controller.submitEditCourse)
router.get("/:courseId/delete", Controller.deleteCourse)

module.exports = router