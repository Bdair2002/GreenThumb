const db = require('./../models/articlesModel');
const article = db.Article;
const catchAsync = require('../utils/catchAsync');
exports.checkArticleOwner = catchAsync(async (req, res, next) => {
  if (req.user.role == 'admin') {
    return next();
  }
  const articleId = req.params.id;
  const foundArticle = await article.findOne({ where: { id: articleId } });
  if (!foundArticle) {
    return res.status(404).json({ message: 'Article not found' });
  }

  if (foundArticle.Publisher_ID !== req.user.id) {
    return res.status(403).json({
      message: 'You are not authorized to delete or update this article',
    });
  }
  next();
});
