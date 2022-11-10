const { User, Profile } = require("../models");
const bcrypt = require("bcrypt");

class Controller {
  static login(req, res) {
    res.render("login");
  }

  static submitLogin(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email } }) 
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)){
          res.send('masuk bray')
        } else{
          res.send('error')
        }
        // if (!user) {
        //   res.send("gak ada email");
        // } else if (user && bcrypt.compareSync(password, user.password)) {
        //   req.session.userId = user.id;
        //   res.send("berhasil login bray");
        // } else {
        //   res.send("salah password bray");
        // }
      })
      .catch((err) => res.send(err));
  }

  static register(req, res) {
    res.render("registerForm");
  }
  static submitRegister(req, res) {
    const { email, password, role } = req.body;
    User.findOne({ where: { email } })
      .then((user) => {
        if (user) {
          res.send("user already registered");
        } else {
          return User.create({ email, password, role });
        }
      })
      .then((newUser) => {
        // res.redirect("/login");
        res.send(newUser);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static logOut(req, res) {
    req.session.destroy((err) => {
        if (err) res.send(err)
        else {
            res.redirect('/login')
        }
    })
}
}

module.exports = Controller;
