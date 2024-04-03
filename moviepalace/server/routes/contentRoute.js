const express = require('express');
const router = express.Router();
const {getAllMovies, getMovieById} = require('../controllers/contentController');

router.get('/', getAllMovies); //back at controller
router.get('/:id', getMovieById); //back at controller

module.exports = router;
