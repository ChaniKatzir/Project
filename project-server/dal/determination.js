const db = require('../models')
const determination = db.determinations

exports.findAll = async (req, res) => {
    determination.findAll()
        .then(data => {
            res.send(data);
        })
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    determination.findOne({ where: { id_person_determination: id } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find determination with id=${id}.`
                });
            }
        })
}

exports.create = async (req, res) => {
    determination.create(req.body)
        .then(data => {
            res.send(data);
        })
}

exports.update = async (req, res) => {
    const id = req.params.id;
    determination.update(req.body, { where: { id_person_determination: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "determination was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update determination with id=${id}. Maybe determination was not found or req.body is empty!`
                });
            }
        })
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    determination.destroy({
        where: { id_person_determination: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "determination was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete determination with id=${id}. Maybe determination was not found!`
                });
            }
        })
}