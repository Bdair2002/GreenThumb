const db = require('./../models/articlesModel');
const article = db.Article;

const addArticle = async (req, res) => {
  try
  {
    const
    { 
      Article_ID,
      Publisher_ID,
      Title,
      Description, 
    } = req.body;
    const Article = await article.create
    ({ 
      Article_ID: Article_ID,
      Publisher_ID: Publisher_ID,
      Title: Title,
      Description: Description,  
    });
    res.status(201).send(Article);
 }
 catch (error) {
  res.status(400).sendStatus(400).send(console.error(error));
}
};


const updateArticle = async (req, res) => {
  try
  {
    const
    { 
      Article_ID,
      Publisher_ID,
      Title,
      Description, 
    } = req.body;
    const Article = await article.update(
      { 
        Title: Title,
        Description: Description,
      },
      {where:{Publisher_ID: Publisher_ID, Article_ID: Article_ID}});
    res.status(200).send(Article);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const updateArticleTitle = async (req, res) => {
  try
  {
    const
    { 
      Article_ID,
      Publisher_ID,
      Title,
    } = req.body;
    const Article = await article.update(
      { 
        Title: Title,
      },
      {where:{Publisher_ID: Publisher_ID, Article_ID: Article_ID}});
    res.status(200).send(Article);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const updateArticleDescription = async (req, res) => {
  try
  {
    const
    { 
      Article_ID,
      Publisher_ID,
      Description,
    } = req.body;
    const Article = await article.update(
      { 
        Description: Description,
      },
      {where:{Publisher_ID: Publisher_ID, Article_ID: Article_ID}});
    res.status(200).send(Article);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const deleteArticle = async (req, res) => {
  try
  {
    const
      { 
        Article_ID,
      } = req.body;
    const Article = await article.destroy({where: {Article_ID: Article_ID}});
        ({
          Article_ID: Article_ID,
        })
      res.status(200).sendStatus(200);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const findArticleOwner = async (req, res) => {
   try 
   {
    const
      { 
        Publisher_ID
      } = req.body;
    const Article = await article.findAll({where: {Publisher_ID: Publisher_ID}});
    ({
        Publisher_ID: Publisher_ID
    })
    res.status(200).send(Article);
   }
   catch (error) {
     res.status(400).sendStatus(400).send(console.error(error));
   }
};


const findArticle = async (req, res) => {
  try 
  {
    const
    { 
      Article_ID,
    } = req.body;
    const Article = await article.findAll({where: {Article_ID: Article_ID}});
    ({
      Article_ID: Article_ID
    })
    res.status(200).send(Article);
  } 
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const findAllArticle = async (req, res) => {
  try
  {
    const Article = await article.findAll({
      attributes: ['Article_ID', 'Publisher_ID', 'Title', 'Description'],
      order: [
        ['Article_ID', 'ASC']
      ]
    })
    res.status(200).send(Article);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};
module.exports = {
  addArticle, 
  updateArticle, 
  updateArticleDescription,
  updateArticleTitle, 
  deleteArticle, 
  findAllArticle, 
  findArticle, 
  findArticleOwner
};
