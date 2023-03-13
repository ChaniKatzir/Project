const db = require('../models')
const institute = db.institutes


  exports.findAll = async (req, res) => {
    institute.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while finding institute."
        });
      });

  }

  exports.create = async (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Save institute in the database
    institute.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the institute."
        });
      });
  };



  // Find a single institute 
  exports.findOne = async (req, res) => {
    const id = req.params.id;
    console.log("findOne")

    institute.findOne({ where: { id_institute: id } })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find institute with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Institute with id=" + id
        });
      });
  };

  // Update a Institute by the id in the request
  exports.update = async (req, res) => {
    const id = req.params.id;
    console.log("update")
    institute.update(req.body, { where: { id_institute: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "institute was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update institute with id=${id}. Maybe institute was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating institute with id=" + id
        });
      });
  };

  // // Delete a Institute with the specified id in the request
  exports.delete =async (req, res) => {
    const id = req.params.id;

    institute.destroy({
      where: { id_institute: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "institute was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete institute with id=${id}. Maybe institute was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete institute with id=" + id
        });
      });
  };


