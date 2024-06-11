const express = require('express');
const AppError = require('./utils/appError');
const userRouter = require('./routes/userRouter');
const gardenRouter = require('./routes/gardenRouter');
const plotsRouter = require('./routes/plotsRouter');
const eventsRouter = require('./routes/eventsRouter');
const resourcesRouter = require('./routes/resourcesRouter');
const articlesRouter = require('./routes/articlesRouter');
const associations = require('./db_associations/associations');
<<<<<<< HEAD
const weatherRouter = require('./routes/externalApiWeatherRouter'); 
const soilRouter = require('./routes/externalApiSoilRouter'); 
=======
const weatherRouter = require('./routes/externalapiRouter');
>>>>>>> 00e9ae55f1adf4f9f57945636c68628e6fd08b92
const globalErrorHandler = require('./controllers/errorController');
const partnershipRouter = require('./routes/partnershipRouter');

const cropsRouter = require('./routes/cropsRouter');
const app = express();
app.use(express.json({ limit: '10kb' }));

app.use('/GreenThumb/v1/users', userRouter);
app.use('/GreenThumb/v1/crops', cropsRouter);
app.use('/GreenThumb/v1/gardens', gardenRouter);
app.use('/GreenThumb/v1/plots', plotsRouter);
app.use('/GreenThumb/v1/events', eventsRouter);
<<<<<<< HEAD
app.use('/GreenThumb/v1/externalapi/weather', weatherRouter);
app.use('/GreenThumb/v1/externalapi/soil', soilRouter);

=======
app.use('/GreenThumb/v1/partnerships', partnershipRouter);

app.use('/GreenThumb/v1/resources', resourcesRouter);
app.use('/GreenThumb/v1/articles', articlesRouter);

app.use('/GreenThumb/v1/externalapis', weatherRouter);
>>>>>>> 00e9ae55f1adf4f9f57945636c68628e6fd08b92
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app; 
