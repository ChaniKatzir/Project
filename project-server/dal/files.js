const db = require('../models')
const file = db.files

exports.findAll = async (req, res) => {
    return file.findAll()
       
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    return file.findOne({ where: { file: id } })
        
}

exports.create = async (req, res) => {
    return file.create(req.body)
       
}

exports.update = async (req, res) => {
    const id = req.params.id;
    return   file.update(req.body, { where: { id_files: id } })
        
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    return file.destroy({
        where: { id_files: id }
    })
        
}