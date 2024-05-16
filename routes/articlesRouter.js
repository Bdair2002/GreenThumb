const express = require('express');
const ArticlesController = require('./../controllers/articlesController');
const router = express.Router();
router.post('/addArticle', ArticlesController.addArticle);
router.patch('/updateArticle', ArticlesController.updateArticle);
router.patch('/updateArticleDescription', ArticlesController.updateArticleDescription);
router.patch('/updateArticleTitle', ArticlesController.updateArticleTitle);
router.delete('/deleteArticle', ArticlesController.deleteArticle);
router.get('/getArticles', ArticlesController.findAllArticle);
router.get('/getArticlesID', ArticlesController.findArticle);
router.get('/getArticlesOwner', ArticlesController.findArticleOwner);
module.exports = router;