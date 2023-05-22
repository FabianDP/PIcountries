const { Router } = require('express');
const {postActivy,getActivity} = require('../controllers/activities');
const router= Router();

router.post('/newActivity',postActivy)  
 router.get('/',getActivity)

module.exports = router;