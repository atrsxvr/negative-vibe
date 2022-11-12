const { User, Profile, Category, Course } = require("../models");

class Controller {
  static homepage(req, res) {
    let course;
    Course.findAll({
      include: Category,
    })
      .then((data) => {
        course = data;
        return Category.findAll();
      })
      .then((data) => {
        res.render("admin/homepage", { categories: data, course });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static addCourse(req, res) {
    Category.findAll()
      .then((data) => {
        res.render("admin/addCourse", { data });
      })
      .catch((err) => res.send(err));
  }

  static submitAddCourse(req, res) {
    const { name, description, duration, CategoryId } = req.body;
    Course.create({ name, description, duration, CategoryId })
      .then(() => res.redirect("/admin"))
      .catch((err) => res.send(err));
  }

  static editCourse(req, res) {
    const id = req.params.courseId;
    Category.findAll().then((dataCategories) => {
      Course.findByPk(id, {
        include: Category,
      })
        .then((data) => {
          res.render("admin/editCourse", { data, categories: dataCategories });
        })
        .catch((err) => res.send(err));
    });
  }

  static submitEditCourse(req, res) {
    const id = req.params.courseId;
    const { name, description, duration, CategoryId } = req.body;
    Course.update(
      {
        name,
        description,
        duration,
        CategoryId,
      },
      { where: { id } }
    )
      .then(() => res.redirect(`/admin`))
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteCourse(req, res) {
    const id = req.params.courseId;
    Course.destroy({
      where: { id },
    })
      .then(() => res.redirect("/admin"))
      .catch((err) => console.log(err));
  }
}

module.exports = Controller;
