
    const { DataTypes } = require('sequelize');

    module.exports = (sequelize) => {
      // defino el modelo
      sequelize.define('activity', {
        id:{
          // cca3
          type:DataTypes.INTEGER,
          autoIncrement:true,
          allowNull: false,
          primaryKey: true,
        },
          name:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          difficulty:{
            type: DataTypes.ENUM("1", "2" , "3" , "4" , "5"),
            allowNull: false,
          },
          duration:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          season:{
            type: DataTypes.ENUM('SUMMER','AUTUMN', 'WINTER','SPRING'),
            allowNull: false,
          },
    
    
    },{timestamps:false});
    };