const express = require('express');
const router = express.Router();

const updateController = require('../controllers/updateController');

router.post('/age',updateController.UpdateAge)
      .post('/gender',updateController.updateGender)
      .post('/dob',updateController.updateDOB)
      .post('/mobile',updateController.updateMobile)

module.exports = router;