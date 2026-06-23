const express = require('express');
const router = express.Router();
const path = require('path');
const contactController = require('../controller/contactController');

router.get("/submit-details",contactController.showForm);


router.post("/submit-details",contactController.handleForm);



module.exports = router;
