const { Sequelize, DataTypes } = require("sequelize");


module.exports=(Sequelize,DataTypes)=>{
    const Person=Sequelize.define('persons',{
        id_person:
        {type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,},
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name:{ type: DataTypes.STRING, allowNull: false },
        address:{ type: DataTypes.STRING, allowNull: false },
        phone_number:{ type: DataTypes.INTEGER },
        celphone_number:{ type: DataTypes.INTEGER},
        Email:{ type: DataTypes.STRING},
        bank_account:{ type: DataTypes.INTEGER,allowNull: false},
        status_person:{type:DataTypes.BOOLEAN,allowNull: false},
        //password:{type:DataTypes.INTEGER}//,allowNull: false}

    },
    {
        timestamps: false,
         freezeTableName: true
    }
    );
    return Person;
}

