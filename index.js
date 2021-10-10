const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));

app.use(express.static('public'));
app.set('view engine', 'ejs');

const modsApi = require('./routes/modifications');
const pages = require('./routes/pages');

app.use('/', pages);
app.use('/api/v1/', modsApi);

app.get('*', (req, res) => {
  res.status(404).render('notfound');
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
