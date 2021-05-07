const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { config } = require('dotenv');

const apiRouter = require('./routes/api.router');

const app = express();

config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(cors());
app.use(limiter);

app.get('/', (req, res, next) => {
  res.json({ welcome: 'Hello World!' });
});

app.use('/api', apiRouter);

app.use(function (e, req, res, next) {
  // const errorMessage = e.message || "Internal server error";
  const errorStatus = e.status || 500;

  res.status(e.status || 400).json({
    errorMessage: e,
    // status: errorStatus,
  });
});

const PORT = process.env.PORT || 30001;

app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
});
