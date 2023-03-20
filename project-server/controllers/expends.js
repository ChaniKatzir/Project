const dalexpends = require('../dal/expends')



exports.findAll = async (req, res) => {
  dalexpends.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while findg expends."
        });
      });
    }
  
    exports.findAllinst = async (req, res) => {
     
      dalexpends.findAll(req.params.id)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while findg incomes."
            });
          });
        }
  
      exports.findAllmonth = async (req, res) => {
    dalexpends.findAll( req.params.id
      ,req.params.year
      ,req.params.month
        )    
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while findg incomes."
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
   
    dalexpends.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the expends."
        });
      });
  };
  
  
  // Find a single Income 
  exports.findOne = async (req, res) => {
   
    dalexpends.findOne(req.params.id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find expends with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving expends with id=" + id
        });
      });
  };
  
  // Update a Income by the id in the request
  exports.update = async (req, res) => {
  
    dalexpends.update(req.params.id,req.body)
      .then(num => {
        if (num == 1) {
          res.send({
            message: "expends was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update expends with id=${id}. Maybe Income was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating expends with id=" + id
        });
      });
  };
  
  // // Delete a Income with the specified id in the request
  exports.delete =async (req, res) => {
   
    dalexpends.destroy(req.params.id)
      .then(num => {
        if (num == 1) {
          res.send({
            message: "expends was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete expends with id=${id}. Maybe Income was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete expends with id=" + id
        });
      });
  };