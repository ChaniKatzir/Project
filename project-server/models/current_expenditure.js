const { Sequelize, DataTypes } = require("sequelize");
const {institutes} = require(".");
module.exports=(Sequelize,DataTypes)=>{
    const CurrentExpenditure=Sequelize.define('current_expenditures',{
        id_current_expenditure: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true},
        sum: { type: DataTypes.INTEGER, allowNull: false },
        collector:{ type: DataTypes.STRING, allowNull: false},
        recept_number:{ type: DataTypes.INTEGER, allowNull: false, uniqe: true },
        date:{ type: DataTypes.DATE, allowNull: false},
        id_institute_expends:{ type: DataTypes.INTEGER, allowNull: false, references: institutes, referenceskey: 'id_institute' }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    );
    return CurrentExpenditure;
}