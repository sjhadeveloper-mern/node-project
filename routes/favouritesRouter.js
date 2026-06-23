const express = require('express');
const router = express.Router();
const path = require('path');
const FavouriteController = require('../controller/favouriteController');



router.get("/favourites",FavouriteController.addFavourite);



module.exports = router;