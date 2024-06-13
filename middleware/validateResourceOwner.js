const db = require('./../models/resourcesModel');
const resource = db.Resource;
const catchAsync = require('../utils/catchAsync');
exports.checkResourceOwner = catchAsync(async (req, res, next) => {
  if (req.user.role == 'admin') {
    return next();
  }
  const resourceid = req.params.id;
  const foundResource = await resource.findOne({ where: { id: resourceid } });

  if (!foundResource) {
    return res.status(404).json({ message: 'Resource not found' });
  }

  if (foundResource.OwnerID !== req.user.id) {
    return res.status(403).json({
      message: 'You are not authorized to delete or update this resource',
    });
  }
  next();
});
