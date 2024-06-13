const express = require('express');
const ArticlesController = require('./../controllers/articlesController');
const router = express.Router();
const authController = require('./../controllers/authController');
const middleware = require('../middleware/validateArticlePublisher');
router.use(authController.protect);
router.post(
  '/',
  ArticlesController.setPublisher,
  ArticlesController.addArticle,
);
router.get('/', ArticlesController.findAllArticle);

router.get('/:id', ArticlesController.findArticle);
router.get('/publisher/:Publisher_ID', ArticlesController.findByPublisher);
router.use(authController.restrictTo('user', 'admin'));
router.patch(
  '/:id',
  middleware.checkArticleOwner,
  ArticlesController.updateArticle,
);
router.delete(
  '/:id',
  middleware.checkArticleOwner,
  ArticlesController.deleteArticle,
);

module.exports = router;
