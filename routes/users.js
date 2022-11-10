const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', (req,res) => res.redirect("/login"))
router.get("/login", Controller.login)
router.post("/login", Controller.submitLogin)

// added by reza
// router.get("/admin", Controller.showAdmin)
router.get("/user", Controller.showUser)
router.get("/register", Controller.register)
router.post("/register", Controller.submitRegister)
// router.use(function(req, res, next) {
//     if (!req.session.userId) {
//      const error = "Please login first"
//      res.redirect(`/login?error=${error}`)
//     }
//     else {
//         next()
//     }
// })



module.exports = router