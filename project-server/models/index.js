
const dbConfig = require('../dbConfig/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER, 
    dbConfig.POSSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    define:{
        freezeTableName:true,
        underscored:true,
        timestamps:false
    }
}
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.institutes = require('./institute')(sequelize, DataTypes);
db.expends = require('./current_expenditure')(sequelize, DataTypes);
db.incomes = require('./income')(sequelize, DataTypes);

db.persons = require('./person')(sequelize, DataTypes);
db.attendances = require('./attendance')(sequelize, DataTypes);

db.students = require('./student')(sequelize, DataTypes)

db.staffes = require('./staff')(sequelize, DataTypes);
db.attendances = require('./attendance')(sequelize, DataTypes);
db.determinations = require('./determination')(sequelize, DataTypes);


// db.persons.hasMany(db.students);
// db.students.belongsTo(db.persons);

db.persons.hasMany(db.students, {
    foreignKey: 'id_person_student',
  });
  db.students.belongsTo(db.persons, {
    foreignKey: 'id_person_student',
  });
// db.persons.hasMany(db.students,{foreingnKey:'id_person_student'});
// db.students.belongsTo(db.persons,{foreingnKey:'id_person_student'});
// db.files = require('./files')(sequelize, DataTypes);

// db.sequelize.sync({ force: true })
//     .then(() => {
//         console.log('yes re-sync done!')
//     })
module.exports = db

