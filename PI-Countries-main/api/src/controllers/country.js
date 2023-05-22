const { Country, Activity } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const getContryD = async (req, res) => {
  try {
    const { id } = req.params;
    const idPais = id;
    const idd = idPais.toUpperCase();
    console.log(idd);
    const country = await Country.findOne({
      where: {
        id: idd,
      },
      include: Activity,
    });
    console.log(country);
    return res.json(country);
  } catch (error) {
    res.send(error);
  }
};
const getCountryName = async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);
    if (!name) {
      const Contryall = await Country.findAll({ include: Activity });
      res.send(Contryall);
    } else {
      const CountryQuery = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Activity,
      });
      if (!CountryQuery[0])
        return res.status(404).json({
          error: ` no se encuentra ningun Pais con el nombre , ${name}`,
        });
      return res.status(200).json(CountryQuery);
    }
    //   const nombre= data.filter(e=>e.name==name)
  } catch (error) {
    console.log(error);
    return res.status(500).send("FFFFF");
  }
};
module.exports = { getContryD, getCountryName };
