const express = require('express');
const AppError = require('./utils/appError');
const userRouter = require('./routes/userRouter');
const gardenRouter = require('./routes/gardenRouter');
const plotsRouter = require('./routes/plotsRouter');
const eventsRouter = require('./routes/eventsRouter');
const resourcesRouter = require('./routes/resourcesRouter');
const articlesRouter = require('./routes/articlesRouter');
const associations = require('./db_associations/associations');
const weatherRouter = require('./routes/externalapiRouter'); 

const globalErrorHandler = require('./controllers/errorController');
const cropsRouter = require('./routes/cropsRouter');
const app = express();
app.use(express.json({ limit: '10kb' }));

app.use('/GreenThumb/v1/users', userRouter);
app.use('/GreenThumb/v1/crops', cropsRouter);
app.use('/GreenThumb/v1/gardens', gardenRouter);
app.use('/GreenThumb/v1/plots', plotsRouter);
app.use('/GreenThumb/v1/events', eventsRouter);
app.use('/GreenThumb/v1/resources', resourcesRouter);
app.use('/GreenThumb/v1/articles', articlesRouter);
app.use('/GreenThumb/v1/externalapis', weatherRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app; 
