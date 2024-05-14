const db = require('./../models/gardenModel');
const catchAsync = require('../utils/catchAsync');
const Garden = db.Garden;

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
    Plots: Plots,
    Sunlight: Sunlight,
    SoilType: SoilType,
    WaterSource: WaterSource,
    Latitude: Latitude,
    Longitude: Longitude,
  });
  res.status(200).send(newGarden);
});
getAllGardens = (req, res) => {
  Garden.findAll().then((gardens) => {
    res.status(200).send(gardens);
  });
};

getMyGardens = catchAsync(async (req, res, next) => {
  const myGarden = await Garden.findOne({
    where: { owner_id: req.user.id },
  });
  res.status(200).send(myGarden);
});
getGardenByName = catchAsync(async (req, res, next) => {
  Name = req.body.Name;
  const garden = await Garden.findOne({
    where: { Name: Name },
  });
  res.status(200).send(garden);
});

deleteGarden = catchAsync(async (req, res, next) => {
  currentUser = req.user.id;
  Name = req.body.Name;
  const garden = await Garden.destroy({
    where: { Name: Name, owner_id: currentUser },
  });
  res.status(204).send({
    status: 'Delete done.',
    data: null,
  });
});
module.exports = {
  addGarden,
  getAllGardens,
  getMyGardens,
  getGardenByName,
  deleteGarden,
};
//user
//create garden //get gardens // get gerdent
