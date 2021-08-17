const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const { route } = require('./genresRoutes');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/delete/:id', moviesController.destroy);

// crear: POST /movies
// listar: GET /movies
// editar: PUT o PATCH /movies/id
// eliminar: DELETE /movies/id
// detalle: GET /movies/id

router.post('/api/movies', moviesController.createMovie)
router.delete('/api/movies/:id', moviesController.deleteMovie)

module.exports = router;