const {User} = require("../models")

class Controller {
    static homepage (req, res){
        res.send("ini user homepage")
    }
}

module.exports = Controller