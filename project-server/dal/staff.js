const db = require('../models')
const { where } = require('sequelize');
const staff = db.staffes
const person = db.persons
const createObj = require('../dal/createObj')

exports.findAll = async (req, res) => {
    let p = {};

    createObj.cr(p, "$first_name$", req.body.first_name);
    createObj.cr(p, "$last_name$", req.body.last_name);
    createObj.cr(p, "id_role", req.body.id_role);
    createObj.cr(p, "seniority", req.body.seniority);
    createObj.cr(p, "$phone_number$", req.body.phone_number);
    createObj.cr(p, "$celphone_number$", req.body.celphone_number);
    createObj.cr(p, "id_institute_staff", req.body.id_institute_staff);
    createObj.cr(p, "id_person_staff", req.body.id_person_staff);
    const qry = {};
    qry.where = p;
    qry.include = [{ model: db.persons, attribute: [] }];
    qry.raw = true;

    staff.findAll(qry).then(data => {
        res.send(data);
    })
}

exports.create = async (req, res) => {
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
    let objstaff = {
        "id_role": req.body.id_role,
        "seniority": req.body.seniority,
        "id_institute_staff": req.body.id_institute_staff,
        "id_person_staff": data1.id_person
    }
    const data2 = await staff.create(objstaff)
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

    createObj.cr(s, "id_role", req.body.id_role);
    createObj.cr(s, "seniority", req.body.seniority);
    createObj.cr(s, "id_institute_staff", req.body.id_institute_staff);

    if (Object.keys(p).length != 0) {
        person.update(p, { where: { id_person: id } })
            .then(num => {
                console.log(num);
                if (num == 1) {
                    if (Object.keys(s).length != 0) {
                        staff.update(s, { where: { id_person_staff: id } })
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
                    else {
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
    else if (Object.keys(s).length != 0) {
        staff.update(req.body, { where: { id_person_staff: id } })
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
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    staff.destroy({
        where: { id_person_staff: id }
    }),
        person.destroy({
            where: { id_person: id }
        })
            .then(num => {
                if (num == 1) {
                    status_person = false;
                    res.send({
                        message: "staff was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete staff with id=${id}. Maybe staff was not found!`
                    });
                }
            })
}