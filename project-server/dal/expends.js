const db = require('../models')
const expends = db.expends
const Op = db.Sequelize.Op;
const sequelize = require('sequelize');

exports.findAll = async (req, res) => {
    expends.findAll()
        .then(data => {
            res.send(data);
        })
}

exports.findAllinst = async (req, res) => {
    const inst = req.params.id;
    expends.findAll({ where: { id_institute_expends: inst } })

        .then(data => {
            res.send(data);
        })
}

exports.findAllmonth = async (req, res) => {
    const id = req.params.id;
    const year = req.params.year;
    const month = req.params.month;

    expends.findAll(
        {
            where: {
                [Op.and]: [{ id_institute_expends: id },
                sequelize.where(sequelize.fn('YEAR', sequelize.col('date')), year),
                sequelize.where(sequelize.fn('MONTH', sequelize.col('date')), month)
                ]
            }
        }
    )
        .then(data => {
            res.send(data);
        })
}

exports.create = async (req, res) => {
    expends.create(req.body)
        .then(data => {
            res.send(data);
        })
}


exports.findOne = async (req, res) => {
    const id = req.params.id;
    expends.findOne({ where: { id_current_expenditure: id } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find expends with id=${id}.`
                });
            }
        })
}

exports.update = async (req, res) => {
    const id = req.params.id;
    expends.update(req.body, { where: { id_current_expenditure: id } })
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
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    expends.destroy({
        where: { id_current_expenditure: id }
    })
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
}