const dalincome = require('../dal/income')

exports.findAll = async (req, res) => {
  dalincome.findAll()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg incomes."
      });
    });
}

exports.findAllinst = async (req, res) => {
  dalincome.findAllinst()

    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg incomes."
      });
    });
}

exports.findAllmonth = async (req, res) => {
  dalincome.findAllmonth()

    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg incomes."
      });
    });
}


exports.create = async (req, res) => {
  //  request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  dalincome.create()

    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Income."
      });
    });
};


exports.findOne = async (req, res) => {
  dalincome.findOne()

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Income with id=" + id
      });
    });
};

exports.update = async (req, res) => {
  dalincome.update()

    .catch(err => {
      res.status(500).send({
        message: "Error updating Income with id=" + id
      });
    });
};

exports.delete = async (req, res) => {
  dalincome.delete()

    .catch(err => {
      res.status(500).send({
        message: "Could not delete Income with id=" + id
      });
    });
};