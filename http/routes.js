const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  renderFile('index', next, res);
});

router.get('/privacy', (req, res, next) => renderFile('privacy', next, res));
router.get('/terms', (req, res, next) => renderFile('terms', next, res));

function renderFile(file, next, res) {
  fs.readFile('./data/site.json', (err, data) => {
    if (err) {
      console.err(err);
      next(err); // must pass errors inside async to Express
    }
    res.render(file, JSON.parse(data), (err, html) => {
      if (err) {
        console.error(err);
        res.status(500).send('Unable to generate web page.');
      }
      else {
        res.send(html);
      }
    });
  });
}

module.exports = router;