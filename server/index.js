const express = require('express');
 
const app = express();
const port = 8080;
 
app.get('/api/test', (req, res) => {
  res.send({ hello: 'world'});
})
 
app.listen(port, () => {
  console.log('Listeing on port 8080');
})