const { where } = require('sequelize');
const db = require('../models');
const person = db.persons
const student = db.students
var { cr } = require('../dal/createObj ');

exports.findAll = async (req, res) => {
  let p = {};
  cr(p, "$first_name$", req.body.first_name);
  cr(p, "$last_name$", req.body.last_name);
  cr(p, "yearbook", req.body.yearbook);
  cr(p, "id_institute_student", req.body.id_institute_student);
  cr(p, "$phone_number$", req.body.phone_number);
  cr(p, "$celphone_number$", req.body.celphone_number);
  cr(p, "$id_person$", req.body.id_person);

  const qry = {};
  qry.where = p;
  qry.include = [{ model: db.persons, attribute: [] }];
  qry.raw = true;
  console.log("---find",qry);

  student.findAll(qry).then(data => {
    console.log("---find",data);

    res.send(data);
  })
    .catch(err => {
  console.log("---find",err);

      res.status(500).send({
        message:
          err.message || "Some error occurred while finding institute."
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
  let objperson = {
    "id_person":req.body.id_person, 
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "address": req.body.address,
    "phone_number": req.body.phone_number,
    "celphone_number": req.body.celphone_number,
    "Email": req.body.Email,
    "bank_account": req.body.bank_account,
    "status_person": true,
    "password": req.body.password

  };
   try {
    const data1 = await person.create(objperson)
    console.log(data1);
    let objstudent = {
      "yearbook": req.body.yearbook,
      "status": 3,
      "id_institute_student": req.body.id_institute_student,
      "tuition": req.body.tuition,
      "id_person_student": data1.id_person
    };

    const data2 = await student.create(objstudent)
    console.log(data2);
    res.send({ data1, data2 });
  }
  catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the student."
    });
  };
};


// Update a student by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;
  let p = {};
  let s = {};

  cr(p, "first_name", req.body.first_name);
  cr(p, "last_name", req.body.last_name);
  cr(p, "address", req.body.address);
  cr(p, "phone_number", req.body.phone_number);
  cr(p, "celphone_number", req.body.celphone_number);
  cr(p, "Email", req.body.Email);
  cr(p, "bank_account", req.body.bank_account);
  cr(p, "status_person", req.body.status_person);

  cs(s, "yearbook", req.body.yearbook);
  cs(s, "id_institute_student", req.body.id_institute_student);
  cs(s, "tuition", req.body.tuition);

  if (Object.keys(p).length != 0) {
    person.update(p, { where: { id_person: id } })
      .then(num => {
        if (num == 1) {
          if (Object.keys(s).length != 0) {
            student.update(s, { where: { id_person_student: id } })
              .then(num => {
                if (num == 1) {
                  res.send({
                    message: "student was updated successfully."
                  });
                }
                else {
                  res.send({
                    message: `Cannot update student with id=${id}. Maybe student was not found or req.body is empty!`
                  });
                }
              })
              .catch(err => {
                res.status(500).send({
                  message: "Error updating student with id=" + id
                });
              });
          }
          else {
            res.send({
              message: "person was updated successfully."
            });
          }
        }
        else {
          res.send({
            message: `Cannot update person with id=${id}. Maybe student was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating person with id=" + id
        });
      });
  }
  else if (Object.keys(s).length != 0) {
    student.update(req.body, { where: { id_person_student: id } })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update student with id=${id}. Maybe student was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating student with id=" + id
        });
      });
  }
};


// // Delete a student with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    student.destroy({
      where: { id_person_student: id }
    }),
      person.destroy({
        where: { id_person: id }
      })
        .then(num => {
          if (num == 1) {
            status_person = false;
            res.send({
              message: "student was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete student with id=${id}. Maybe student was not found!`
            });
          }
        })
  }
  catch {
    (err => {
      res.status(500).send({
        message: "Could not delete student with id=" + id
      });
    });
  }
};

