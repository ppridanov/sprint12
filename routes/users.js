/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
// eslint-disable-next-line import/no-unresolved
const users = require('../data/users.json');


router.get('/users', (req, res) => {
  res.send(users);
});
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < users.length; i += 1) {
    if (users[i]._id === id) {
      return res.send(users[i]);
    }
  }
  return res.status(404).send({ message: 'Нет пользователя с таким id' });
});
module.exports = router;
