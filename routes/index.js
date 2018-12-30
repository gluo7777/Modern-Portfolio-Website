const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('data/site.json', (err,data) => {
    if(err){ 
      console.log(err);
      next(err); // must pass errors inside async to Express
    };
    res.render('index', JSON.parse(data));
  });
});

module.exports = router;
