

module.exports=(Sequelize,DataTypes)=>{
    const Institute=Sequelize.define('institutes',{
        id_institute:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true             
        },
        tuition:{type:DataTypes.INTEGER,allowNull:false} ,
        manager_id_person:{type:DataTypes.INTEGER,allowNull:false},
        address:{type:DataTypes.STRING,allowNull:false},
        Email:{type:DataTypes.STRING,allowNull:false},
        phone_number:{type:DataTypes.INTEGER,allowNull:false},
        name:{type:DataTypes.STRING,allowNull:false, uniqe:true}
    },
    {
        timestamps: false,
         freezeTableName: true
    }

    );
    return Institute;
}