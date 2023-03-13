const db = require('../models')
const attendance=db.attendances


exports.findAll = async(req, res) => {
  attendance.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while findg attendances."
        });
      });
  }
  
  exports.findAllByPersonId = async (req, res) => {
    const id = req.params.id;
    attendance.findAll({where: { id_person_attendance: id }})
      
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while findg attendance."
          });
        });
      }

  // Find a single attendance 
  //Find a single attendance 
  exports.findLast = async (req, res) => {
    const id = req.params.id;
attendance.findOne({
      where: { id_person_attendance:id }, 
      order: [
          ['date', 'DESC']
      ]
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while findg attendance."
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
   console.log(attendance);
    attendance.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the attendance."
        });
      });
  };
  
  
  
  // Update a attendance by the id in the request
  exports.update = async (req, res) => {
    const id = req.params.id;
    attendance.update(req.body, { where: { id_attendance: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "attendance was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update attendance with id=${id}. Maybe attendance was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating attendance with id=" + id
        });
      });
  };
  
  // // Delete a attendance with the specified id in the request
  exports.delete =async (req, res) => {
    const id = req.params.id;
    attendance.destroy({
      where: { id_attendance: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "attendance was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete attendance with id=${id}. Maybe attendance was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete attendance with id=" + id
        });
      });
  };