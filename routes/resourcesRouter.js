const express = require('express');
const resourcesController = require('./../controllers/resourcesController');
const authController = require('./../controllers/authController');

const router = express.Router();
router.use(authController.protect);
router.post('/addResource', resourcesController.addResource);
router.patch('/updateResource', resourcesController.updateResource);
router.put('/updateResourceDescription', resourcesController.updateResourceDescription);
router.put('/updateResourceSold', resourcesController.updateResourceSold);
router.put('/updateResourceTools', resourcesController.updateResourceTools);
router.delete('/deleteResource', resourcesController.deleteResource);
router.get('/getResources', resourcesController.findAllResource);
router.get('/getResourcesTool', resourcesController.findResourceTool);
router.get('/getResourcesOwner', resourcesController.findResourceOwner);
module.exports = router;