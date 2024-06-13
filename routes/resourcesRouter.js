const express = require('express');
const resourcesController = require('./../controllers/resourcesController');
const authController = require('../controllers/authController');
const middleware = require('../middleware/validateResourceOwner');
const router = express.Router();
router.use(authController.protect);
router.get('/', resourcesController.findAllResource);
router.post('/', resourcesController.setOwner, resourcesController.addResource);
router.use(authController.restrictTo('user', 'admin'));
router.patch(
  '/:id',
  middleware.checkResourceOwner,
  resourcesController.updateResource,
);
router.delete(
  '/:id',
  middleware.checkResourceOwner,
  resourcesController.deleteResource,
);
module.exports = router;
