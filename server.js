const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('hit the server!');
  res.sendStatus(200).send('express server!');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
