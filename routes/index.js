const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('data/site.json', (err,data) => {
    if(err){ 
      console.err(err);
      next(err); // must pass errors inside async to Express
    };
    res.render('index', JSON.parse(data)
    ,(err,html) => {
      if(err){
        console.error(err);
        res.status(500).send('Unable to generate web page.');
      }else{
        res.send(html);
      }
    });
  });
});

module.exports = router;
