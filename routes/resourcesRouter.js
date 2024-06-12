const express = require('express');
const resourcesController = require('./../controllers/resourcesController');
const authController = require('../controllers/authController');
const router = express.Router();
router.use(authController.protect);
router.get('/', resourcesController.findAllResource);
router.post('/', resourcesController.setOwner, resourcesController.addResource);
router.use(authController.restrictTo('user', 'admin'));
router.patch(
  '/:id',
  resourcesController.checkOwner,
  resourcesController.updateResource,
);
router.delete(
  '/:id',
  resourcesController.checkOwner,
  resourcesController.deleteResource,
);
module.exports = router;
