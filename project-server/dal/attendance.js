const db = require('../models')
const attendance = db.attendances
const person = db.persons
const Op = db.Sequelize.Op;
const sequelize = require('sequelize');

exports.findAll = async (req, res) => {
    return attendance.findAll()
}

exports.findAllByPersonId = async (id) => {
    const att = attendance.findAll({ where: { id_person_attendance: id } })
    return ( att )
}

exports.findLast = async (id) => {
    return attendance.findOne({
        where: { id_person_attendance: id },
        order: [
            ['date', 'DESC']
        ]
    })

}
exports.findCal = async (id, year, month, day) => {
    return attendance.findOne({
        where: {
            [Op.and]: [{ id_attendance: id },
            sequelize.where(sequelize.fn('YEAR', sequelize.col('date')), year),
            sequelize.where(sequelize.fn('MONTH', sequelize.col('date')), month),
            sequelize.where(sequelize.fn('DAY', sequelize.col('date')), day)
            ]
        }
    })
}
exports.findMonth = async (id, year, month) => {
    return attendance.findAll({
        where: {
            [Op1.and]: [{ id_attendance: id },
            sequelize.where(sequelize.fn('YEAR', sequelize.col('date')), year),
            sequelize.where(sequelize.fn('MONTH', sequelize.col('date')), month)
            ]
        }
    })
}
exports.create = async (req, res) => {
    return attendance.create(req.body)

}

exports.update = async (id) => {
    return attendance.update(req.body, { where: { id_attendance: id } })

}

exports.delete = async (id) => {
    return attendance.destroy({
        where: { id_attendance: id }
    })

}