const { Model, DataTypes } = require("sequelize");

class Traveller extends Model {}

Traveller.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    type: DataTypes.CHAR(30),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    type: DataTypes.CHAR(30),
    allowNumm: false,
  },
}
{
    sequelize,
    freezeTableName: true,
    modelName: "traveller",
});

module.exports = Traveller;
