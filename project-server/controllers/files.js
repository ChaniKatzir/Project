
const db = require('../models')
const file=db.files


exports.findAll = async(req, res) => {
    file.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while findg file."
        });
      });
  }
  
 
  exports.findOne = async (req, res) => { 
    const id=req.params.id;
    file.findOne({ where: { file: id} })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find file with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving file with id=" + id
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
    file.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the file."
        });
      });
  };
  
  
  
  // Update a file by the id in the request
  exports.update = async (req, res) => {
    const id = req.params.id;
    file.update(req.body, { where: { id_files: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "file was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update file with id=${id}. Maybe file was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating file with id=" + id
        });
      });
  };
  
  // // Delete a file with the specified id in the request
  exports.delete =async (req, res) => {
    const id = req.params.id;
    file.destroy({
      where: { id_files: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "file was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete file with id=${id}. Maybe file was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete file with id=" + id
        });
      });
  };