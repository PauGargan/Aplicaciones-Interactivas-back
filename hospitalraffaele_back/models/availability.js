'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class availability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      availability.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'doctor_id'
      })
    }
  };
  availability.init({
    doctor_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    weekday: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    timeFrom: {
      allowNull: false,
      type: DataTypes.STRING
    },
    timeTo: {
      allowNull: false,
      type: DataTypes.STRING
    },
    frequency: {
      allowNull: false,
      defaultValue: 30,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'availability',
  });
  return availability;
};