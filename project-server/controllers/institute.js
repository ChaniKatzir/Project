const dalinstitute = require('../dal/institute')



exports.findAll = async (req, res) => {
  dalinstitute.findAll()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding institute."
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

  dalinstitute.create()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the institute."
      });
    });
};



exports.findOne = async (req, res) => {
  dalinstitute.findOne()

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Institute with id=" + id
      });
    });
};

exports.update = async (req, res) => {
  dalinstitute.update()

    .catch(err => {
      res.status(500).send({
        message: "Error updating institute with id=" + id
      });
    });
};

exports.delete = async (req, res) => {
  dalinstitute.delete()

    .catch(err => {
      res.status(500).send({
        message: "Could not delete institute with id=" + id
      });
    });
};


