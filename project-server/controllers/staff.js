const dalstaff = require('../dal/staff')



exports.findAll = async (req, res) => {
  dalstaff.findAll()
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
    dalstaff.create()
  }
  catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the student."
    });
  };
};


exports.update = async (req, res) => {
  dalstaff.update()

    .catch(err => {
      res.status(500).send({
        message: "Error updating staff with id=" + id
      });
    });

};

exports.delete = async (req, res) => {

  try {
    dalstaff.delete()

  }
  catch {
    (err => {
      res.status(500).send({
        message: "Could not delete staff with id=" + id
      });
    });
  }
};

