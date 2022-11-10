const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
const coursesRoutes = require("./courses")
const categoriesRoutes = require("./categories")

// added by reza
router.get("/", Controller.showAdmin)


router.use("/courses", coursesRoutes)
router.use("/categories", categoriesRoutes)
// router.get('/', Controller.showCourseData)

// router.get('/add', Controller.formAddCourse)
// router.post('/add', Controller.handleAddCourse)

// router.get('/:id/edit', Controller.formEditCourse)
// router.post('/:id/edit', Controller.handleEditCourse)
// router.get('/:id/delete', Controller.deleteCourse)



module.exports = router