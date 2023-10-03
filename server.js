const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('hit the server!');
  res.sendStatus(200).send('express server!');
})

app.listen(3000, () => {
  console.log('server started on port 3000');
});
