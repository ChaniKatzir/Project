const { Sequelize, DataTypes } = require("sequelize");
const {roles}=require(".");
const {institutes}=require(".");
const {persons}=require(".");

module.exports=(Sequelize,DataTypes)=>{
    const Staff=Sequelize.define('staffes',{
        id_staff:{
            type:DataTypes.INTEGER,
            autoIncrement:true,allowNull: false,uniqe:true,
            primaryKey:true},
        id_role: { type: DataTypes.INTEGER, allowNull: false},//, references: roles, referenceskey: 'id_role' },
        seniority: { type: DataTypes.INTEGER, allowNull: false},
        id_institute_staff: { type: DataTypes.INTEGER, allowNull: false },//, references: institutes, referenceskey: 'id_institute'
        id_person_staff: { type: DataTypes.INTEGER, allowNull: false }//, references: persons
    },
    {
        timestamps: false,
         freezeTableName: true
    }
    );
    return Staff;}