const { Sequelize, DataTypes } = require("sequelize");
const {persons} = require(".");
const{institutes}=require(".");
module.exports=(sequelize,DataTypes)=>{
    const Student=sequelize.define('students',{
        id_student:{
            type: DataTypes.INTEGER,
            autoIncrement:true,allowNull: false,uniqe:true,
            primaryKey:true},
        yearbook: { type: DataTypes.INTEGER, allowNull: false },
        id_institute_student: { type: DataTypes.INTEGER, allowNull: false},
        tuition:{ type: DataTypes.INTEGER, allowNull: false },
        id_person_student:{ type: DataTypes.INTEGER , uniqe: true},
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    );
return Student;}