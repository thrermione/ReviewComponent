const models = require('../models/products.js');
const express = require('express');
const app = express();
const port = 8080;

app.get('/api/products/:product_id', (req, res) => {
  models.getReview(req.params.product_id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));