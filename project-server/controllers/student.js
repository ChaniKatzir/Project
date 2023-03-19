const dalstudent = require('../dal/student')

exports.findAll = async (req, res) => {
  dalstudent.findAll()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding institute."
      });
    });
};

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  try {
    dalstudent.create()

  }
  catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the student."
    });
  };
};


exports.update = async (req, res) => {
  dalstudent.update()

    .catch(err => {
      res.status(500).send({
        message: "Error updating student with id=" + id
      });
    });

};


exports.delete = async (req, res) => {

  try {
    dalstudent.delete()

  }
  catch {
    (err => {
      res.status(500).send({
        message: "Could not delete student with id=" + id
      });
    });
  }
};

