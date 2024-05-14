const express = require('express');
const AppError = require('./utils/appError');
const userRouter = require('./routes/userRouter');
const gardenRouter = require('./routes/gardenRouter');
//const eventsRouter = require('./routes/eventsRouter');
//const resourcesRouter = require('./routes/resourcesRouter');
const globalErrorHandler = require('./controllers/errorController');
const app = express();
app.use(express.json({ limit: '10kb' }));

<<<<<<< Updated upstream
app.use('/GreenThumb/v1/users', userRouter);
app.use('/GreenThumb/v1/gardens', gardenRouter);
=======
app.use('/users', userRouter);
app.use('/gardens', gardenRouter);
//app.use('/events', eventsRouter);
//app.use('/resources', resourcesRouter);
>>>>>>> Stashed changes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app; 
