const db = require('../models')
const institute = db.institutes

exports.findAll = async (req, res) => {
    institute.findAll()
        .then(data => {
            res.send(data);
        })
}

exports.create = async (req, res) => {
    institute.create(req.body)
        .then(data => {
            res.send(data);
        })
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    institute.findOne({ where: { id_institute: id } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find institute with id=${id}.`
                });
            }
        })
}

exports.update = async (req, res) => {
    const id = req.params.id;
    institute.update(req.body, { where: { id_institute: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "institute was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update institute with id=${id}. Maybe institute was not found or req.body is empty!`
                });
            }
        })
}

exports.delete = async (req, res) => {
    const id = req.params.id;

    institute.destroy({
        where: { id_institute: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "institute was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete institute with id=${id}. Maybe institute was not found!`
                });
            }
        })
}