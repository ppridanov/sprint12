const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.static('public'));
// eslint-disable-next-line no-unused-vars
const users = require('./routes/users');
// eslint-disable-next-line no-unused-vars
const cards = require('./routes/cards');

app.use('/', users);
app.use('/', cards);
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
