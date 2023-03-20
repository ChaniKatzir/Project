const db = require('../models')
const attendance = db.attendances

exports.findAll = async (req, res) => {
   return attendance.findAll()
        
}

exports.findAllByPersonId = async (id) => {
    return attendance.findAllByPersonId({ where: { id_person_attendance: id } })
}

exports.findLast = async (id) => {
    return attendance.findOne({
        where: { id_person_attendance: id },
        order: [
            ['date', 'DESC']
        ]
    })
       
}

exports.create = async (req, res) => {
  return  attendance.create(req.body)
        
}

exports.update = async (id) => {
    return attendance.update(req.body, { where: { id_attendance: id } })
        
}

exports.delete = async (id) => {
   return  attendance.destroy({
        where: { id_attendance: id }
    })
        
}