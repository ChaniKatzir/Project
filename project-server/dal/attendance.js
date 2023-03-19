const db = require('../models')
const attendance = db.attendances

exports.findAll = async (req, res) => {
    attendance.findAll()
        .then(data => {
            res.send(data);
        })
}

exports.findAllByPersonId = async (req, res) => {
    attendance.findAllByPersonId({ where: { id_person_attendance: id } })
        .then(data => {
            res.send(data);
        })
}

exports.findLast = async (req, res) => {
    attendance.findOne({
        where: { id_person_attendance: id },
        order: [
            ['date', 'DESC']
        ]
    })
        .then(data => {
            res.send(data);
        })
}

exports.create = async (req, res) => {
    attendance.create(req.body)
        .then(data => {
            res.send(data);
        })
}

exports.update = async (req, res) => {
    attendance.update(req.body, { where: { id_attendance: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "attendance was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update attendance with id=${id}. Maybe attendance was not found or req.body is empty!`
                });
            }
        })
}

exports.delete = async (req, res) => {
    attendance.destroy({
        where: { id_attendance: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "attendance was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete attendance with id=${id}. Maybe attendance was not found!`
                });
            }
        })
}