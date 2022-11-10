const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', Controller.showCategorieData)

router.get('/add', Controller.formAddCategorie)
router.post('/add', Controller.handleAddCategorie)

router.get('/:categoryId', Controller.showCourseByCategory )
router.get('/:categoryId/:coursesId/edit', Controller.handleEditCourse )
// router.post('/:categoryId/:coursesId/edit', Controller.editCourseByCategory )

module.exports = router