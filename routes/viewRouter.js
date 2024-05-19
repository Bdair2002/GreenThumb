const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', viewsController.getLandingPage);
router.get('/login_page', viewsController.getLoginPage);
router.get('/signup_page', viewsController.getsignupPage);
router.get('/gardens', authController.isLoggedIn, viewsController.getGardens);
router.get(
  '/gardens/:id',
  authController.isLoggedIn,
  viewsController.getGarden,
);

module.exports = router;
