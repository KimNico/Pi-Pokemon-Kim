const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define('Pokemon', {
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    hp:{
      type:DataTypes.FLOAT,
      allowNull: true,
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    speed:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    height:{
      type:DataTypes.FLOAT,
      allowNull: true,
    },
    weight:{
      type:DataTypes.FLOAT,
      allowNull: true,
    },
    pokeId:{
      type:DataTypes.INTEGER,
      unique:true
    }
  });
};
