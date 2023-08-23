const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const controller = require('./controllers/userController');
const userRouter = require('./router/userRouter');
const eventRouter = require('./router/eventRouter');
const rootRouter = require('./router/rootRouter');
const cors = require('cors')

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

app.use(
  '/user',
  (req, res, next) => {
    console.log('going to user router');
    next();
  },
  userRouter
);

app.use('/event', eventRouter);

// for localhost:3000/ - will enter rootRouter and 
// check if user has cookies to determine redirect
// app.use( '/', rootRouter);


// 404 error handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
