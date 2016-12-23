var express = require('express');
var router = express.Router();
var ctrlBlog = require('../controllers/blog');
//var ctrlComentario = require('../controllers/comentario');

router.get('/blog', ctrlBlog.blogLista);
router.post('/blog', ctrlBlog.blogCreate);
router.get('/blog/:blogid', ctrlBlog.blogReadOne);
router.put('/blog/:blogid', ctrlBlog.blogUpdateOne);
router.delete('/blog/:blogid', ctrlBlog.blogDeleteOne);


/*
// reviews
router.post('/blog/:bloid/comentario', ctrlComentario.comentarioCreate);
router.get('/blog/:bloid/comentario/:comentarioid', ctrlComentario.comentarioReadOne);
router.put('/blog/:bloid/comentario/:comentarioid', ctrlComentario.comentarioUpdateOne);
router.delete('/blog/:bloid/comentario/:comentarioid', ctrlComentario.comentarioDeleteOne);
*/
module.exports = router;
