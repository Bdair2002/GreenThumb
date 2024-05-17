const express = require('express');
const partnershipController = require('./../controllers/partnershipController');
const authController = require('../controllers/authController');
const router = express.Router({ mergeParams: true });

router.use(authController.protect);
router
  .route('/')
  .get(partnershipController.getAllPartnerships)
  .post(
    authController.restrictTo('partner'),
    partnershipController.setPartnership,
  );
router
  .route('/:id')
  .get(partnershipController.getPartnership)
  .patch(
    authController.restrictTo('partner', 'admin'),
    partnershipController.updatePartnership,
  )
  .delete(
    authController.restrictTo('partner', 'admin'),
    partnershipController.deletePartnership,
  );

module.exports = router;
