const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
   
    id:{
      // cca3
      type:DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
     name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

  },{timestamps:false});
};



// "name": {"common": "Bermuda"}
// "flags": ["https://flagcdn.com/bm.svg","https://flagcdn.com/w320/bm.png" ]
// "continents": [   "North America"  ],
// "capital": [   "Hamilton"   ],
    //   "subregion": "North America",
    //   "area": 54.0,
    // "population": 63903,--------------