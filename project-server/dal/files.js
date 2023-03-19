const db = require('../models')
const file = db.files

exports.findAll = async (req, res) => {
    file.findAll()
        .then(data => {
            res.send(data);
        })
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    file.findOne({ where: { file: id } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find file with id=${id}.`
                });
            }
        })
}

exports.create = async (req, res) => {
    file.create(req.body)
        .then(data => {
            res.send(data);
        })
}

exports.update = async (req, res) => {
    const id = req.params.id;
    file.update(req.body, { where: { id_files: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "file was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update file with id=${id}. Maybe file was not found or req.body is empty!`
                });
            }
        })
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    file.destroy({
        where: { id_files: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "file was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete file with id=${id}. Maybe file was not found!`
                });
            }
        })
}