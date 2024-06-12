const db = require('./../models/articlesModel');
const article = db.Article;
const factory = require('./factoryController');
const catchAsync = require('../utils/catchAsync');
exports.addArticle = factory.createOne(article);
exports.findAllArticle = factory.getAll(article);
exports.updateArticle = factory.updateOne(article);
exports.deleteArticle = factory.deleteOne(article);
exports.findByPublisher = catchAsync(async (req, res, next) => {
  const Publisher_ID = req.params.Publisher_ID;
  const articles = await article.findAll({
    where: { Publisher_ID: Publisher_ID },
  });
  res.status(200).send(articles);
});

exports.findArticle = factory.getOne(article);
exports.setPublisher = (req, res, next) => {
  req.body.Publisher_ID = req.user.id;
  next();
};
