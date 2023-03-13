const { Sequelize, DataTypes } = require("sequelize");
const{persons}=require(".");

module.exports=(Sequelize,DataTypes)=>{
    const Attendance=Sequelize.define('attendances',{
        id_attendance:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true},
        id_person_attendance: { type: DataTypes.INTEGER, allowNull: false, references: persons, referenceskey: 'id_person' },
        date:{ type: DataTypes.DATE, allowNull: false },
        entry_time:{ type: DataTypes.INTEGER, allowNull: false },
        exit_time:{ type: DataTypes.INTEGER, allowNull: false }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    );
    return Attendance;
}