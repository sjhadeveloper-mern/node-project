const express = require('express');
const router = express.Router();
const path = require('path');
const homeController = require('../controller/homeController');


router.get("/",homeController.showHomePage);
router.get("/homes/:id",homeController.showHomeDetails)


module.exports = router;