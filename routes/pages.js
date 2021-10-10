const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main');
});
router.get('/premium', (req, res) => {
  res.render('premium');
});
router.get('/nonpremium', (req, res) => {
  res.render('nonpremium');
});
router.get('/lista_modow', (req, res) => {
  res.render('lista_modow');
});
router.get('/pobierz', (req, res) => {
  res.render('pobierz');
});
router.get('/pobierz/pliki', (req, res) => {
  res.download('public/mods.zip');
});
module.exports = router;
