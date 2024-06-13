const db2 = require('../models/userModel');
const User = db2.User;
const db = require('../models/gardenModel');
const Garden = db.Garden;
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getLandingPage = (req, res) => {
  res.status(200).render('landing', {
    title: 'Welcome to greenthumb',
  });
};
exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};
exports.getsignupPage = (req, res) => {
  res.status(200).render('signup', {
    title: 'SignUp',
  });
};
exports.getGardens = catchAsync(async (req, res, next) => {
  req.user = res.locals.user;
  const gardens = await Garden.findAll({
    include: {
      model: User,
      attributes: ['username'],
    },
  });
  res.status(200).render('gardens', {
    title: 'My Gardens',
    gardens,
  });
});
exports.getGarden = catchAsync(async (req, res, next) => {
  const garden = await Garden.findOne({ where: { id: req.params.id } });

  if (!garden) {
    return next(new AppError('There is no Garden with that name.', 404));
  }
  console.log(garden.Name);
  res.status(200).render('gardenMap', {
    title: `${Garden.Name} Garden`,
    garden,
  });
});
