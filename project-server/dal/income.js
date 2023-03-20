const db = require('../models')
const income = db.incomes
const Op = db.Sequelize.Op;
const sequelize = require('sequelize');

exports.findAll = async (req, res) => {
    return income.findAll()
       
}

exports.findAllinst = async (id) => {
    
    return income.findAll({ where: { id_institute_income: id } })

       
}

exports.findAllmonth = async (id,year,month) => {
  

    return income.findAll(
        {
            where: {
                [Op.and]: [{ id_institute_income: id },
                sequelize.where(sequelize.fn('YEAR', sequelize.col('date')), year),
                sequelize.where(sequelize.fn('MONTH', sequelize.col('date')), month)
                ]
            }
        }
    )
       
}

exports.create = async (body) => {
    return income.create(body)
       
}


exports.findOne = async (id) => {

    return income.findOne({ where: { id_income: id } })
        
}

exports.update = async (id,body) => {

    return income.update(body, { where: { id_income: id } })
       
}

exports.delete = async (id) => {
    return income.destroy({
        where: { id_income: id }
    })
}