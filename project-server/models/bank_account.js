const { Sequelize, DataTypes } = require("sequelize");
const{persons}=require(".");

module.exports=(Sequelize,DataTypes)=>{
    const Banks=Sequelize.define('banks',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,uniqe:true,allowNull:false,
            primaryKey:true},
        id_bank: { type: DataTypes.INTEGER, allowNull: false },
        id_branch:{ type: DataTypes.INTEGER, allowNull: false },
        num:{ type: DataTypes.INTEGER, allowNull: false }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    );
    return Banks;
}