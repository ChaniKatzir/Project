const db = require('../models')
const determination=db.determinations


exports.findAll = async(req, res) => {
    determination.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while findg determination."
        });
      });
  }
  
 
  exports.findOne = async (req, res) => {
    const id=req.params.id;
    determination.findOne({ where: { id_person_determination: id} })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find determination with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving determination with id=" + id
        });
      });
  };
  
  

  exports.create = async (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
   console.log(determination);
    // Save determination in the database
    determination.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the determination."
        });
      });
  };
  
  
  
  // Update a determination by the id in the request
  exports.update = async (req, res) => {
    const id = req.params.id;
    determination.update(req.body, { where: { id_person_determination: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "determination was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update determination with id=${id}. Maybe determination was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating attendance with id=" + id
        });
      });
  };
  
  // // Delete a determination with the specified id in the request
  exports.delete =async (req, res) => {
    const id = req.params.id;
    determination.destroy({
      where: { id_person_determination: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "determination was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete determination with id=${id}. Maybe determination was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete determination with id=" + id
        });
      });
  };