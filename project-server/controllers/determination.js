const daldetermination = require('../dal/determination')


exports.findAll = async (req, res) => {
  daldetermination.findAll()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg determination."
      });
    });
}


exports.findOne = async (req, res) => {
  daldetermination.findOne()
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving determination with id=" + id
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
  daldetermination.create()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the determination."
      });
    });
};



exports.update = async (req, res) => {
  daldetermination.update()
    .catch(err => {
      res.status(500).send({
        message: "Error updating attendance with id=" + id
      });
    });
};

exports.delete = async (req, res) => {
  daldetermination.delete()

    .catch(err => {
      res.status(500).send({
        message: "Could not delete determination with id=" + id
      });
    });
};