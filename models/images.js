'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  images.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      bucket: DataTypes.STRING,
      key: DataTypes.STRING,
      // Added below in addition to bootstrapped project from sequelize-cli
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "images",
      // Added below in addition to bootstrapped project from sequelize-cli
      timestamps:true
    }
  );
  return images;
};