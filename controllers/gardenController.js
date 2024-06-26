const db = require('./../models/gardenModel');
const db1 = require('./../models/plotsModel');
const db2 = require('./../models/cropsModel');
const plots = require('./plotsController');
const catchAsync = require('../utils/catchAsync');
const factory = require('./factoryController');
const Garden = db.Garden;
const Crops = db2.Crops;
const Plots = db1.Plots;
addGarden = catchAsync(async (req, res, next) => {
  const {
    Name,
    Location,
    Plots,
    Sunlight,
    SoilType,
    WaterSource,
    Latitude,
    Longitude,
  } = req.body;

  const newGarden = await Garden.create({
    Name: Name,
    owner_id: req.user.id,
    Location: Location,
    PlotsNumber: Plots,
    Sunlight: Sunlight,
    SoilType: SoilType,
    WaterSource: WaterSource,
    Latitude: Latitude,
    Longitude: Longitude,
  });
  plots.addPlots(newGarden.id, Plots);
  res.status(201).send(newGarden);
});

getAllGardens = factory.getAll(Garden);

getMyGardens = catchAsync(async (req, res, next) => {
  const myGarden = await Garden.findAll({
    where: { owner_id: req.user.id },
  });
  res.status(200).send(myGarden);
});
getGardenByName = catchAsync(async (req, res, next) => {
  Name = req.params.Name;
  const garden = await Garden.findOne({
    where: { Name: Name },
  });
  res.status(200).send(garden);
});

exports.check = catchAsync(async (req, res, next) => {
  const garden = await Garden.findOne({
    where: { id: req.body.garden_id },
  });
  if (garden.owner_id === owner_id) {
    return true;
  }
  return false;
});
check1 = catchAsync(async (req, res, next) => {
  const garden = await Garden.findOne({
    where: { id: req.body.garden_id },
  });
  if (garden.owner_id === owner_id) {
    return true;
  }
  return false;
});

deleteGarden = catchAsync(async (req, res, next) => {
  currentUser = req.user.id;
  Name = req.params.Name;
  if (check1) {
    const garden = await Garden.findOne({
      where: { Name: Name, owner_id: currentUser },
    });

    const deleteCrops = await Crops.destroy({
      where: { Garden_ID: garden.id },
    });
    const deletePlots = await Plots.destroy({
      where: { Garden_ID: garden.id },
    });
    const deletGarden = await Garden.destroy({
      where: { Name: Name, owner_id: currentUser },
    });

    res.status(204).send({ status: 'success' });
  } else {
    res.status(401).send('You are not authorized to delete this garden');
  }
});
updateMyGarden = catchAsync(async (req, res, next) => {
  currentUser = req.user.id;
  Name = req.params.Name;
  if (check1) {
    const {
      NewName,
      Location,
      Sunlight,
      SoilType,
      WaterSource,
      Latitude,
      Longitude,
    } = req.body;

    const updateGarden = await Garden.update(
      {
        Name: NewName,
        owner_id: req.user.id,
        Location: Location,
        Sunlight: Sunlight,
        SoilType: SoilType,
        WaterSource: WaterSource,
        Latitude: Latitude,
        Longitude: Longitude,
      },
      {
        where: { Name: Name, owner_id: currentUser },
      },
    );
    res.status(201).send(updateGarden);
  } else {
    res.status(401).send('You are not authorized to update this garden');
  }
});

function checkOwner(gardenId) {
  catchAsync(async (req, res, next) => {
    const garden = await Garden.findOne({
      where: { id: gardenId },
    });
    if (garden.owner_id === req.user.id) {
      return true;
    }
  });
}

module.exports = {
  addGarden,
  getAllGardens,
  getMyGardens,
  getGardenByName,
  deleteGarden,
  updateMyGarden,
  checkOwner,
};
