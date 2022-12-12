const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

const MONGO_URI =
  'mongodb+srv://codesmith:ecri37@time-goblin.rrflcmy.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewURLParser: true,
    // useUnifiedTopology: true,
    dbName: 'time-goblin',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));



app.use(express.static(path.resolve(__dirname, '../client')));
app.use('/', apiRouter);

app.use((req, res) =>
  res.status(404).send('The requested page could not be found.')
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
