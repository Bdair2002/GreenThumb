const express = require('express');
const ArticlesController = require('./../controllers/articlesController');
const router = express.Router();
const authController = require('./../controllers/authController');
router.use(authController.protect);
router.post(
  '/',
  ArticlesController.setPublisher,
  ArticlesController.addArticle,
);
router.get('/', ArticlesController.findAllArticle);
router.patch('/:id', ArticlesController.updateArticle);
router.delete('/:id', ArticlesController.deleteArticle);
router.get('/:id', ArticlesController.findArticle);
router.get('/publisher/:Publisher_ID', ArticlesController.findByPublisher);

module.exports = router;
