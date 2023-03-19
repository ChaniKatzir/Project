const dalexpends = require('../dal/expends')

exports.findAll = async (req, res) => {
  dalexpends.findAll()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg expends."
      });
    });
}

exports.findAllinst = async (req, res) => {
  dalexpends.findAllinst()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg incomes."
      });
    });
}

exports.findAllmonth = async (req, res) => {
  dalexpends.findAllmonth()

    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg incomes."
      });
    });
}



exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  dalexpends.create()


    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the expends."
      });
    });
};


exports.findOne = async (req, res) => {
  dalexpends.findOne()

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving expends with id=" + id
      });
    });
};


exports.update = async (req, res) => {
  dalexpends.update()

    .catch(err => {
      res.status(500).send({
        message: "Error updating expends with id=" + id
      });
    });
};

exports.delete = async (req, res) => {
  dalexpends.delete()

    .catch(err => {
      res.status(500).send({
        message: "Could not delete expends with id=" + id
      });
    });
};