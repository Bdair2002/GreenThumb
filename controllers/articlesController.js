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
    res.status(201).json({message: 'Article created successfully, ' + Article + ''});
 }
 catch (error) {
  res.status(409).json({message : 'There is a Article with same Article_ID already exists'});
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
      if(Article != 0)
        res.status(200).json({message: ' The Article with Article_ID: ' + Article_ID + ' updated Successfully'});
      else
      {
        res.status(400).json({message : 'No Article with Article_ID: ' + Article_ID +' and Publisher_ID: '+ Publisher_ID + ' to update'});
      }
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
      if(Article != 0)
        res.status(200).json({message: ' The Title for Article with Article_ID: ' + Article_ID + ' updated Successfully'});
      else
      {
        res.status(400).json({message : 'No Article found with Article_ID ' + Article_ID +' and Publisher_ID ' + Publisher_ID + ' to update!'});
      }
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
      if(Article != 0)
        res.status(200).json({message: ' The Description for Article with Article_ID: ' + Article_ID + ' updated Successfully'});
      else
      {
        res.status(400).json({message : 'No Article found with Article_ID ' + Article_ID +' and Publisher_ID ' + Publisher_ID + ' to update!'});
      }
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
        if(Article === 0)
          res.status(400).json({message : 'Article not found for Article_ID ' + Article_ID + ''});
        else
        {
          res.status(200).json({message : 'Article with Article_ID ' + Article_ID +' deleted successfully'});
        }
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
    if(Article  != 0)
      res.status(200).send(Article);
    else
    {
      res.status(400).json({message: 'Article not found for Publisher_ID: '+ Publisher_ID +' '});
    }
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
    if(Article != 0)
      res.status(200).send(Article);
    else
    {
      res.status(400).json({message: 'Article not found with Article ID: ' + Article_ID +' '});
    }  
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
    if(Article != 0)
      res.status(200).send(Article);

    else
    {
      res.status(400).json({message: 'There is no Articles in the Database'});
    }
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
