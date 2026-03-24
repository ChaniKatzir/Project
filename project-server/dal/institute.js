const db = require('../models')
const institute = db.institutes

exports.findAll = async (req, res) => {
    return institute.findAll()
}

exports.create = async (body) => {
    return  institute.create(body)
}


exports.findOneInstitute = async (id) => {
    return institute.findOne({ where: { id_institute: id } })
}
exports.findOne = async (id) => {
    return institute.findOne({ where: { manager_id_person: id } })
}

exports.update = async (id,body) => {
    return  institute.update(body, { where: { id_institute: id } })
}

exports.delete = async (id) => {
    return  institute.destroy({
        where: { id_institute: id }
    })
       
}