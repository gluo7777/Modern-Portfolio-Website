const express = require('express');
const router = express.Router();
const fs = require('fs');
const fetch = require('node-fetch')
const siteConfigUrl = process.env.SITE_CONFIG_URL || 'local';
const renderFile = siteConfigUrl === 'local' ? renderLocal : renderRemote;

router.get('/', (req, res, next) => renderFile('index', next, res));
router.get('/privacy', (req, res, next) => renderFile('privacy', next, res));
router.get('/terms', (req, res, next) => renderFile('terms', next, res));

async function renderRemote(file, next, res) {
  try{
    let response = await fetch(siteConfigUrl);
    if(!response.ok) 
      throw new Error(`Failed to retrieve site configuration file at ${siteConfigUrl}.`);
    let siteJson = await response.json();
    res.render(file, siteJson, (err, html) => {
      if (err) {
        console.error(err);
        res.status(500).send('Unable to generate web page.');
      }
      else {
        res.send(html);
      }
    });
  }catch(err){
    console.error(err);
    next(err); // must pass errors inside async to Express
  }
}

function renderLocal(file, next, res) {
  fs.readFile('./data/site.json', (err, data) => {
    if (err) {
      console.error(err);
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