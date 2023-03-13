const { Sequelize, DataTypes } = require("sequelize");
const {staffes}=require(".");
module.exports=(Sequelize,DataTypes)=>{
    const Salary=Sequelize.define('salaries',{
        id_salary:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true},
        year: { type: DataTypes.INTEGER, allowNull: false},
        month:{ type: DataTypes.INTEGER, allowNull: false},
        sum: { type: DataTypes.INTEGER, allowNull: false},
        transfer_date:{ type: DataTypes.DATE, allowNull: false},
        id_staff_salary:  { type: DataTypes.INTEGER, allowNull: false, references: staffes, referenceskey: 'id_staff' }
    },
    {
        timestamps: false,
         freezeTableName: true
    }
    );
    return Salary;}