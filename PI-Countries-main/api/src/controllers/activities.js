const { Activity, Country } = require("../db");

const postActivy = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    const nameAct=await  Activity.findOne({where:{name}})
    if(nameAct) return res.status(400).json({error:'actividad ya esta creada'})
    
    let activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await activity.setCountries(countries);
    console.log(activity);
    let activityWithCountry = await Activity.findOne({
      where: { name: name },
      attributes: {
        exclude: ["updatedAt", "createdAt"],
      },
      include: {
        model: Country,
        through: {
          attributes: [],
        },
      },
    });
    res.json(activityWithCountry);
  } catch (error) {
    return res.status(500).send("FFFFF");
  }
};

const getActivity = async (req, res) => {
  try {
    const Allcon = await Activity.findAll();
    return res.status(200).json(Allcon);
  } catch (error) {
    return res.status(500).send("FFFFF");
  }
};

module.exports = { postActivy, getActivity };
