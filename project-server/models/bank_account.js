const { Sequelize, DataTypes } = require("sequelize");
const{persons}=require(".");

module.exports=(Sequelize,DataTypes)=>{
<<<<<<< HEAD
    const Banks=Sequelize.define('banks',{
        id_b:{
=======
    const BankAccount=Sequelize.define('banks',{
        id:{
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
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
    return BankAccount;
}