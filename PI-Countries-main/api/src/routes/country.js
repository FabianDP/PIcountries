const { Router } = require('express');
// const { getAllCount, GetCountryId } = require('../controllers/country')

const {getContryD,getCountryName}=require('../controllers/country.js');
// const allContrie = require('../../APIDATA/api_data.js');
const router= Router();

router.get('/detail/:id', getContryD)  
router.get('/', getCountryName)  
// router.get('/',allContrie)  
// router.get('/:idPais', GetCou**ntryId)  

module.exports = router;
