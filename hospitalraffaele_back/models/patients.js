'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patients.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'user_id'
      })
    }
  };
  patients.init({
    user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    dni: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER
    },
    es_particular: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    obra_social: {
      allowNull: true,
      type: DataTypes.STRING
    },
    obra_social_plan: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'patients',
  });
  return patients;
};