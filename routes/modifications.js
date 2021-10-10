const express = require('express');
const router = express.Router();
const mods = require('../public/mody.json');

router.get('/mods_json', (req, res) => {
  res.send(mods);
});

module.exports = router;
