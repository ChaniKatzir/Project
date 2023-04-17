const db=require('../models')
const { where } = require('sequelize');
const staff=db.staffes
const person = db.persons
  
//find 
var { cr } = require('../dal/createObj ');


exports.findAll=async(req,res)=>{
    let p={};
    cr(p,"$first_name$",req.body.first_name);
    cr(p,"$last_name$",req.body.last_name);
    cr(p,"id_role",req.body.id_role);
    cr(p,"seniority",req.body.seniority);
    cr(p,"$phone_number$",req.body.phone_number); 
    cr(p,"$celphone_number$",req.body.celphone_number);
    cr(p,"id_institute_staff",req.body.id_institute_staff); 
    cr(p,"id_person_staff",req.body.id_person_staff); 
    
    console.log(p);
    const qry={};
    qry.where= p;
    qry.include=[{model:db.persons,attribute:[]}];
    qry.raw= true;

    staff.findAll(qry).then(data => {
      res.send(data);
    })
    .catch(err => {
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
console.log(req.body);
let objperson={"first_name":req.body.first_name, 
              "last_name":req.body.last_name,
              "address":req.body.address,  
              "phone_number":req.body.phone_number,
              "celphone_number":req.body.celphone_number,
              "Email":req.body.Email,
              "bank_account":req.body.bank_account,
              "status_person":1,
              "password":req.body.password
            };


    try{
      const data1 = await person.create(objperson)
      let objstaff={"id_role":req.body.id_role,
                  "seniority":0,
                  "id_institute_staff":req.body.id_institute_staff,
                  "id_person_staff":data1.id_person }
      const data2  = await staff.create(objstaff)
      console.log(data2);
      res.send({data1, data2});
        }
        catch(err){
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the student."
          });
        };
 };


// Update a student by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;


      let p={};
      let s={};

      cr(p,"first_name",req.body.first_name);  
      cr(p,"last_name",req.body.last_name);
      cr(p,"address",req.body.address);
      cr(p,"phone_number",req.body.phone_number);
      cr(p,"celphone_number",req.body.celphone_number);
      cr(p,"Email",req.body.Email);
      cr(p,"bank_account",req.body.bank_account);
      cr(p,"status_person",req.body.status_person);

      cr(s,"id_role",req.body.id_role);
      cr(s,"seniority",req.body.seniority);
      cr(s,"id_institute_staff",req.body.id_institute_staff);
      
  if(Object.keys(p).length!=0)
 {
    person.update(p, { where: { id_person: id }})
    .then(num => {
      console.log(num);
      if (num == 1) {
        if(Object.keys(s).length!=0)
          {
            staff.update(s, { where: { id_person_staff: id }})
              .then(num => {
                if (num == 1) {
                  res.send({
                    message: "staff was updated successfully."
                  });
                } 
                else {
                  res.send({
                    message: `Cannot update staff with id=${id}. Maybe staff was not found or req.body is empty!`
                  });
                }
              })
              .catch(err => {
                res.status(500).send({
                  message: "Error updating staff with id=" + id
                });
              });
          }
          else{
            res.send({
              message: "staff was updated successfully."
            });
          }
      } 
      else {
        res.send({
          message: `Cannot update person with id=${id}. Maybe staff was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating person with id=" + id
      });
    });
  }
  else if(Object.keys(s).length!=0)
  {
    staff.update(req.body, { where: { id_person_staff: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "staff was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update staff with id=${id}. Maybe staff was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating staff with id=" + id
        });
      });
   }
};

// // Delete a student with the specified id in the request
exports.delete =async (req, res) => {
  const id = req.params.id;
try{
    staff.destroy({
    where: { id_person_staff: id }}), 
    person.destroy({
    where: { id_person: id }})
    .then(num => {
      if (num == 1) {
        status_person=false;
        res.send({
          message: "staff was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete staff with id=${id}. Maybe staff was not found!`
        });
      }
    })}
   catch{ (err => {
      res.status(500).send({
        message: "Could not delete staff with id=" + id
      });
    });}
}; 

