const {Country } = require('../db');
const axios = require('axios')
const { API_URL } = process.env;

const dataApi = async (req, res) => {
    try {
      // si quiero hacer una subida en la parte de los datos tengo que filtrar lo que quiero y subirlo de una manera ordenada
      // /`${name}?fullText=true`
  
      const all = await axios.get(`${API_URL}`);
      const data = all.data;
  
      const contries = data.map((elementos) => {
        return {
          id: elementos.cca3,
          name: elementos.name.common,
          flag: elementos.flags[0],
          continents: elementos.continents[0],
          capital: elementos.capital?elementos.capital[0]:"not found",
          subregion: elementos.subregion,
          area: elementos.area,
          population: elementos.population,
          
        };
      });
      await Country.bulkCreate(contries);
      console.log('creado')
      
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };

module.exports=dataApi