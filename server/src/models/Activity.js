const { DataTypes } = require('sequelize');
// Traigo DataTypes para definir los tipos de datos del modelo

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validator: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        season: {
            type: DataTypes.ENUM('Summer', 'autumn', 'Winter', 'spring'),
            allowNull: false
        }
    });
};