const router = require('express').Router();
// eslint-disable-next-line import/no-unresolved
const cards = require('../data/cards.json');

router.get('/cards', (req, res) => {
  res.send(cards);
});
module.exports = router;
