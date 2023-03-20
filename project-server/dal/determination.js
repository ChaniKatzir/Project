const db = require('../models')
const determination = db.determinations

exports.findAll = async (req, res) => {
   return determination.findAll()
    
}

exports.findOne = async (id) => {
    return determination.findOne({ where: { id_person_determination: id } })
       
}

exports.create = async (body) => {
    return  determination.create(body)
        
}

exports.update = async (id,body) => {
    return determination.update(body, { where: { id_person_determination: id } })
       
}

exports.delete = async (id) => {
    
    return  determination.destroy({
        where: { id_person_determination: id }
    })
        
}