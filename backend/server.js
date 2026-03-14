const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Jantha Backend Live Hai! 🚀');
});

app.listen(3000, () => {
  console.log('Jantha server chal raha hai port 3000 pe!');
});