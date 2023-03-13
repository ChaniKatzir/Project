const { Sequelize, DataTypes } = require("sequelize");
const {persons}=require(".");
module.exports=(Sequelize,DataTypes)=>{
    const transcriptionFiles=Sequelize.define('transcription_files',{
        id_files:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true},
        file: { type: DataTypes.STRING, allowNull: false},
        information:{ type: DataTypes.STRING, allowNull: false},
        id_person_files: { type: DataTypes.INTEGER, allowNull: false, references: persons, referenceskey: 'id_person' }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    );
    return transcriptionFiles;}