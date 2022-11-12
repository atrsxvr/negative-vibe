const {User} = require("../models")
const {Category, Course} = require("../models")

class Controller {
    static showUser(req, res){
        Category.findAll({
          include: Course 
        })
        .then(function(data){
          // res.send(data)
          res.render("user/homePage", {data})
        })
        .catch()
      }
}

module.exports = Controller