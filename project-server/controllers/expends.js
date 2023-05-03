const dalexpends = require('../dal/expends')



exports.findAll = async (req, res) => {
  dalexpends.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || "Some error occurred while findg expends."
        });
      });
    }
  
    exports.findAllinst = async (req, res) => {
     
      dalexpends.findAllinst(req.params.id)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).json({
              message:
                err.message || "Some error occurred while findg incomes."
            });
          });
        }
  
      exports.findAllmonth = async (req, res) => {
    dalexpends.findAllmonth( req.params.id
      ,req.params.year
      ,req.params.month
        )    
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).json({
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
        res.status(500).json({
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
          return res.send(data);
        } else {
          res.status(404).json({
            message: `Cannot find expends with id=${req.params.id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "Error retrieving expends with id=" + req.params.id
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
            message: `Cannot update expends with id=${req.params.id}. Maybe Income was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "Error updating expends with id=" + req.params.id
        });
      });
  };
  
  // // Delete a Income with the specified id in the request
  exports.delete =async (req, res) => {
    dalexpends.delete(req.params.id)
      .then(num => {
        if (num == 1) {
          res.send({
            message: "הרשומה נמחקה בהצלחה"
          });
        } else {
          res.send({
            message: `לא נמצאה רשומה בעלת קוד מספר ${req.params.id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete expends with id=" + req.params.id
        });
      });
  };