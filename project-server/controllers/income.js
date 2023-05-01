const dalincome = require('../dal/income')

exports.findAll = async (req, res) => {
 
  dalincome.findAll()
   
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
  
  exports.findAllinst = async (req, res) => {
    
    dalincome.findAllinst(req.params.id)
      
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
   
    dalincome.findAllmonth(  req.params.id,
       req.params.year,
req.params.month)    
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
   
    dalincome.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Income."
        });
      });
  };
  
  
  // Find a single Income 
  exports.findOne = async (req, res) => {
    dalincome.findOne(req.params.id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Income with id=${req.params.id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Income with id=" + req.params.id
        });
      });
  };
  
  // Update a Income by the id in the request
  exports.update = async (req, res) => {
    dalincome.update(req.params.id,req.body)
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Income was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Income with id=${req.params.id}. Maybe Income was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Income with id=" + req.params.id
        });
      });
  };
  
  // // Delete a Income with the specified id in the request
  exports.delete =async (req, res) => {
    dalincome.delete(req.params.id)
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
          message: "Could not delete Income with id=" + req.params.id
        });
      });
  };