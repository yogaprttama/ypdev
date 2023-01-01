const express = require('express');
const path = require('path');

const app = express();
const helmet = require('helmet');
const port = 3000;

app.use(helmet());

app.disable('x-powered-by');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/contact.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/error404.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
