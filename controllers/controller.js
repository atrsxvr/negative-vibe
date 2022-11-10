const { User, Profile, Category, Course } = require("../models");
const { Op } = require('sequelize')
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
          res.render('/homePageUsers')
        } else{
          res.send('error')
        }
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
        res.redirect("/login");
        // res.send(newUser);
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
  ////////////////////////////// bagian added
  static showAdmin(req, res) {
    res.render("admin/homePage")
  }

  static showCourseData(req, res) {
    Course.findAll()
    .then(function(data){
      res.render("admin/course", {data})
    })
    .catch(function(err){
      res.send(err)
    })
    // res.render("course")
  }
  
  static showCourseByCategory(req,res) {
    const id = +req.params.categoryId
    
    Category.findByPk(id, {
      include: [{
        model: Course
    }]
    })
    .then(function(data){
      console.log(data);
      res.render("admin/courseByCategoryId", {data})
    })
    .catch(function(err){
      res.send(err)
    })
  }

  static showCategorieData(req, res) {
    Category.findAll()
    .then(function(data){
      res.render("admin/categorie", {data})
    })
    .catch(function(err){
      res.send(err)
    })
    // res.render("course")
  }
  
  static formAddCategorie(req, res) {
    res.render("admin/addCategories")
  }
  
  static handleAddCategorie(req, res) {
    const { name } = req.body
    Category.create({ name })
    .then(function (_) {
      res.redirect('/')
    })
            .catch(function (err) {
                res.send(err)
              })
            }
            
            static formAddCourse(req, res) {
              res.render("admin/addCourse")
            }
            
            static handleAddCourse(req, res) {
              const { name, description, duration, CategoryId} = req.body
              console.log(req.body);
              Course.create({ name, description, duration, CategoryId})
              .then(function (_) {
                res.redirect('/admin/courses')
              })
              .catch(function (err) {
                console.log(err);
                res.send(err)
              })
            }
            
            static formEditCourse(req, res) {
              const err = req.query.err
              const reqId = +req.params.id
              console.log({id: req.params.id})
              Course.findOne({ where: { id: reqId } })
              .then(function (data) {
                res.render('admin/editCourse', { data, err })
              })
              .catch(function (err) {
                res.send(err)
    })
  }
  
  static handleEditCourse(req, res) {
    const { name, description, duration, CategoryId} = req.body
    const course = +req.params.id
    console.log(req.body);
    Course.update({ name, description, duration, CategoryId},{
      where:{
        id: course
      }
    })
    .then(function (_) {
      res.redirect('/admin/courses')
    })
    .catch(function (err) {
      console.log(err);
      res.send(err)
    })
  }
  
  static deleteCourse(req, res) {
    const CourseId = +req.params.id
    Course.findByPk(CourseId)
    .then(function (data) {
      Course.destroy({
        where: { id: CourseId }
      })
      return data
    })
    .then(function (data) {
      res.redirect(`/admin/courses`)
    })
    .catch(function (err) {
      res.send(err)
    })
  }
  //bagian user
  static showUser(req, res){
    Category.findAll({
      include: Course 
    })
    .then(function(data){
      // res.send(data)
      res.render("users/homePageUsers", {data})
    })
    .catch()
  }
  
}

module.exports = Controller;
