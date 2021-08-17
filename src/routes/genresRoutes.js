const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/genres', genresController.list);
router.get('/genres/detail/:id', genresController.detail);

router.get('/api/genres', genresController.getGenresList)
router.get('/api/genres/:id', genresController.getGenreDetail)


module.exports = router;