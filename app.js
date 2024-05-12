const express = require('express');
const AppError = require('./utils/appError');
const userRouter = require('./routes/userRouter');
const globalErrorHandler = require('./controllers/errorController');
const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.all('*', (req, res, next) => {
  console.log('XD');
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
