'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hist_clinica_enfermedades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      hist_clinica_enfermedades.belongsTo(models.patients, {
        as: 'patients',
        foreignKey: 'patient_id'
      }),
      hist_clinica_enfermedades.belongsTo(models.users, {
        as: 'doctors',
        foreignKey: 'doctor_id'
      })
    }
  };
  hist_clinica_enfermedades.init({
    patient_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    doctor_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    comments: { 
      allowNull: false, 
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'hist_clinica_enfermedades',
  });
  return hist_clinica_enfermedades;
};