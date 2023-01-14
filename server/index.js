const express = require('express');
const cors = require('cors');
 
const app = express();
const port = 8080;

app.get('/api/test', (req, res) => {
  try {
    res.status(200).send({ hello: 'world'});
  } catch {
    res.status(400).send('something went wrong');
  }
  
})
 
app.listen(port, () => {
  console.log('Listeing on port 8080');
})