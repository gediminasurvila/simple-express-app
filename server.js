
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200);
  res.send({message: "it works!"});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
