const db = require('../models')
const expends = db.expends
const Op = db.Sequelize.Op;
const sequelize = require('sequelize');

exports.findAll = async (req, res) => {
    return  expends.findAll()
        
}

exports.findAllinst = async (id) => {

    return expends.findAll({ where: { id_institute_expends: id } })

        
}

exports.findAllmonth = async (id,year,month) => {
  

    return expends.findAll(
        {
            where: {
                [Op.and]: [{ id_institute_expends: id },
                sequelize.where(sequelize.fn('YEAR', sequelize.col('date')), year),
                sequelize.where(sequelize.fn('MONTH', sequelize.col('date')), month)
                ]
            }
        }
    )
}

exports.create = async (body) => {
    return expends.create(body)
       
}


exports.findOne = async (id) => {
    
    return expends.findOne({ where: { id_current_expenditure: id } })
       
}

exports.update = async (id,body) => {
 
    return  expends.update(body, { where: { id_current_expenditure: id } })
       
}

exports.delete = async (id) => {
   
    return expends.destroy({
        where: { id_current_expenditure: id }
    })
        
}