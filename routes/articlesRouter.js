const express = require('express');
const ArticlesController = require('./../controllers/articlesController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.use(authController.protect);
router.post('/addArticle', ArticlesController.addArticle);
router.patch('/updateArticle', ArticlesController.updateArticle);
router.put('/updateArticleDescription', ArticlesController.updateArticleDescription);
router.put('/updateArticleTitle', ArticlesController.updateArticleTitle);
router.delete('/deleteArticle', ArticlesController.deleteArticle);
router.get('/getArticles', ArticlesController.findAllArticle);
router.get('/getArticlesID', ArticlesController.findArticle);
router.get('/getArticlesOwner', ArticlesController.findArticleOwner);
module.exports = router;