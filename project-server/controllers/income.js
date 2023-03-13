const db = require('../models')
const income=db.incomes

const Op = db.Sequelize.Op;
const sequelize= require('sequelize');


exports.findAll = async (req, res) => {
  console.log("controler");
    income.findAll()
   
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
    console.log("controler");
    const inst = req.params.id;
      income.findAll({where: { id_institute_income: inst }})
      
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
    const id=req.params.id;
    const year=req.params.year;
    const month=req.params.month;
// res.send("ddd")
    income.findAll(
      {where:{[Op.and]:[{id_institute_income:id},
        sequelize.where(sequelize.fn('YEAR', sequelize.col('date')),year),
        sequelize.where(sequelize.fn('MONTH', sequelize.col('date')), month)
      ]
      }
      }
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
   console.log(income);
    // Save Income in the database
    income.create(req.body)
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
    const id = req.params.id;
    income.findOne({ where: { id_income: id } })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Income with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Income with id=" + id
        });
      });
  };
  
  // Update a Income by the id in the request
  exports.update = async (req, res) => {
    const id = req.params.id;
    income.update(req.body, { where: { id_income: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Income was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Income with id=${id}. Maybe Income was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Income with id=" + id
        });
      });
  };
  
  // // Delete a Income with the specified id in the request
  exports.delete =async (req, res) => {
    const id = req.params.id;
    income.destroy({
      where: { id_income: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Income was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Income with id=${id}. Maybe Income was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Income with id=" + id
        });
      });
  };