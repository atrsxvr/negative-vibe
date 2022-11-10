const {User} = require("../models")

class Controller {
    static homepage (req, res){
        res.send("ini admin homepage")
    }
}

module.exports = Controller