const express = require('express')
const {createFarm, getAllFarms, getAFarm, updateFarm, deleteFarm} = require('../controllers/farmController')

const router = express.Router()

router.route('/').get(getAllFarms).post(createFarm)
router.route('/:id').get(getAFarm).put(updateFarm).delete(deleteFarm)


module.exports = router;