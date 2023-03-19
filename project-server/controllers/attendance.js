const dalAttendance=require('../dal/attendance')

exports.findAll = async (req, res) => {
  dalAttendance.findAll()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg attendances."
      });
    });
}

exports.findAllByPersonId = async (req, res) => {
  const id = req.params.id;
  dalAttendance.findAllByPersonId()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while findg attendance."
      });
    });
}
 
exports.findLast = async (req, res) => {
  const id = req.params.id;
  dalAttendance.findLast()
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
  dalAttendance.create()
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the attendance."
      });
    });
};


exports.update = async (req, res) => {
  const id = req.params.id;
  dalAttendance.update()
    .catch(err => {
      res.status(500).send({
        message: "Error updating attendance with id=" + id
      });
    });
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  dalAttendance.delete()
  
    .catch(err => {
      res.status(500).send({
        message: "Could not delete attendance with id=" + id
      });
    });
};