var express = require('express');
var router = express.Router();
var cors = require('cors')

const News = require('../models/news-technology')

/* GET users listing. */
router.get('/', cors(), async (req, res) => {
  try {
    let news = await News.find({});
    console.log(news);
    res.json(news);
  } catch (error) {
    console.log(error);
    res.json({error: 'Notícias não encontradas'})
  }
})


router.get('/:dataCriacao', cors(), async (req, res) => {
  try {

    const { dataCriacao } = req.params;
  
    let news = await News.find({dataCriacao: dataCriacao})
    console.log('news', news);
    if(news.length <= 0) {
      res.json({
        "error": "Notícia não encontrada"
      }).status(500)
    }

    res.json(news[0])


  } catch (error) {
    res.send({ error: error }).status(500);
  }
});

router.post('/create', async (req, res) => {
  let {
    status,
    totalResults,
    articles,
    id,
    name,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
  } = req.body;

  const news = new News({
    status,
    totalResults,
    articles,
    id,
    name,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
  })

  try {
    await news.save()
    res.status(200).json(news)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Error registering News',
      news: news
    })

  }


})


module.exports = router;
