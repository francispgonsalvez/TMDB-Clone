const express = require('express');
const cors = require('cors');
const watchlistRouter = require('./watchlistRouter');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/', watchlistRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
