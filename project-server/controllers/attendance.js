const dalattendance = require('../dal/attendance')

exports.findAll = async (req, res) => {
  dalattendance.findAll()
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
  dalattendance.findAllByPersonId(req.params.id)
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

exports.findCal = async (req, res) => {
  dalattendance.findCal(req.params.id, req.params.year, req.params.month, req.params.day)
    .then(data => {
      console.log("data", data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg attendance."
      });
    });
}
exports.findMonth = async (req, res) => {
  dalattendance.findMonth(req.params.id, req.params.year, req.params.month)
    .then(data => {
      console.log("data", data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg attendance."
      });
    });
}
//Find a single attendance 
exports.findLast = async (req, res) => {
  dalattendance.findLast(req.params.id)
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
  dalattendance.create(req.body)
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

  dalattendance.update(req.params.id)
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
exports.delete = async (req, res) => {
  dalattendance.destroy(req.params.id)
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