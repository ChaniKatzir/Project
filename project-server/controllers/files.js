const dalfiles = require('../dal/files')


exports.findAll = async (req, res) => {
  dalfiles.findAll()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg file."
      });
    });
}


exports.findOne = async (req, res) => {
  dalfiles.findOne()

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving file with id=" + id
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

  dalfiles.create()

    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the file."
      });
    });
};



exports.update = async (req, res) => {
  dalfiles.update()

    .catch(err => {
      res.status(500).send({
        message: "Error updating file with id=" + id
      });
    });
};

exports.delete = async (req, res) => {
  dalfiles.delete()

    .catch(err => {
      res.status(500).send({
        message: "Could not delete file with id=" + id
      });
    });
};