const { Sequelize, DataTypes } = require("sequelize");
const {persons}=require(".");
module.exports=(Sequelize,DataTypes)=>{
    const determination=Sequelize.define('determinations',{
        id_determination:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true},
        cost: { type: DataTypes.STRING, allowNull: false},
        travel_payment:{ type: DataTypes.INTEGER, allowNull: false},
        pension:{ type: DataTypes.INTEGER, allowNull: false},
        id_person_determination:  { type: DataTypes.INTEGER, allowNull: false, uniqe: true , references: persons, referenceskey: 'id_person' }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    );
    return determination;
}