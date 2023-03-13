const { Sequelize, DataTypes } = require("sequelize");
const {institutes} = require(".");

module.exports = (Sequelize, DataTypes) => {
    const Income = Sequelize.define('incomes', {
        id_income: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sum: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.DATE, allowNull: false },
        origion: { type: DataTypes.STRING, allowNull: false, uniqe: true },
        id_institute_income: { type: DataTypes.INTEGER, allowNull: false, references: institutes, referenceskey: 'id_institute' }

    },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return Income;
}