const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', Controller.showCourseData)


router.get('/add', Controller.formAddCourse)
router.post('/add', Controller.handleAddCourse)

// router.get('/:id/edit', Controller.formEditCourse)
// router.post('/:id/edit', Controller.handleEditCourse)
// router.get('/:id/delete', Controller.deleteCourse)

module.exports = router