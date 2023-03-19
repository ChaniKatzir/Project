const { where } = require('sequelize');
const db = require('../models');
const person = db.persons
const student = db.students
const createObj = require('../dal/createObj')


exports.findAll = async (req, res) => {
    let p = {};

    createObj.cr(p, "$first_name$", req.body.first_name);
    createObj.cr(p, "$last_name$", req.body.last_name);
    createObj.cr(p, "yearbook", req.body.yearbook);
    createObj.cr(p, "id_institute_student", req.body.id_institute_student);
    createObj.cr(p, "$phone_number$", req.body.phone_number);
    createObj.cr(p, "$celphone_number$", req.body.celphone_number);
    createObj.cr(p, "id_person_student", req.body.id_person_student);

    const qry = {};
    qry.where = p;
    qry.include = [{ model: db.persons, attribute: [] }];
    qry.raw = true;

    student.findAll(qry).then(data => {
        res.send(data);
    })
}

exports.create = async (req, res) => {

    console.log(req.body);
    let objperson = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "address": req.body.address,
        "phone_number": req.body.phone_number,
        "celphone_number": req.body.celphone_number,
        "Email": req.body.Email,
        "bank_account": req.body.bank_account,
        "status_person": true
    };
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

exports.update = async (req, res) => {
    const id = req.params.id;
    let p = {};
    let s = {};

    createObj.cr(p, "first_name", req.body.first_name);
    createObj.cr(p, "last_name", req.body.last_name);
    createObj.cr(p, "address", req.body.address);
    createObj.cr(p, "phone_number", req.body.phone_number);
    createObj.cr(p, "celphone_number", req.body.celphone_number);
    createObj.cr(p, "Email", req.body.Email);
    createObj.cr(p, "bank_account", req.body.bank_account);
    createObj.cr(p, "status_person", req.body.status_person);

    createObj.cr(s, "yearbook", req.body.yearbook);
    createObj.cr(s, "id_institute_student", req.body.id_institute_student);
    createObj.cr(s, "tuition", req.body.tuition);


    if (Object.keys(p).length != 0) {
        person.update(p, { where: { id_person: id } })
            .then(num => {
                console.log(num);
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
                            message: "staff was updated successfully."
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
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
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