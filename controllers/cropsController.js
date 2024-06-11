const db = require('./../models/cropsModel');
const db1 = require('./../models/plotsModel');
const db2 = require('./../models/gardenModel');
const catchAsync = require('../utils/catchAsync');
const crud = require('./crudController');
const Crops = db.Crops;
const Plots = db1.Plots;
const Gardens = db2.Garden;

addCrops = catchAsync(async (req, res, next) => {
  const { garden_id, plot_id, type } = req.body;
  const plot = await Plots.findOne({
    where: { Garden_ID: garden_id, Plot_ID: plot_id },
  });
  const garden = await Gardens.findOne({ where: { id: plot.Garden_ID } });
  if (req.user.id === garden.owner_id) {
    if (plot.Available) {
      newCrop = await Crops.create({
        Garden_ID: garden_id,
        Plot_ID: plot_id,
        Type: type,
      });

      await Plots.update(
        { Crop: type, Available: 0 },
        { where: { Garden_ID: garden_id, Plot_ID: plot_id } },
      );
      res.status(200).send(newCrop);
    } else {
      res.status(401).send('This plot is not available');
    }
  } else {
    res.status(401).send('You are not authorized to add crops to this plot');
  }
});

getAllCrops = crud.getAll(Crops);

deleteCrop = catchAsync(async (req, res, next) => {
  id = req.params.id;
  const crop = await Crops.findOne({ where: { Crop_ID: id } });
  const plot = await Plots.findOne({
    where: { Garden_ID: crop.Garden_ID, Plot_ID: crop.Plot_ID },
  });
  const garden = await Gardens.findOne({ where: { id: plot.Garden_ID } });

  if (req.user.id === garden.owner_id) {
    const deletCrop = await Crops.destroy({
      where: { Crop_ID: id },
    });

    res.status(204).send({ status: 'success' });
    const updatePlot = await Plots.update(
      { Crop: null, Available: 1 },
      { where: { Garden_ID: crop.Garden_ID, Plot_ID: crop.Plot_ID } },
    );
  } else {
    res.status(401).send('You are not authorized to delete this crop');
  }
});

const updateCrop = catchAsync(async (req, res, next) => {
  id = req.body.crop_id;
  const crop = await Crops.findOne({ where: { Crop_ID: id } });
  const plot = await Plots.findOne({
    where: { Garden_ID: crop.Garden_ID, Plot_ID: crop.Plot_ID },
  });
  const garden = await Gardens.findOne({ where: { id: plot.Garden_ID } });

  if (req.user.id === garden.owner_id) {
    const { crop_id, garden_id, plot_id, type } = req.body;
    const update = await Crops.update(
      {
        Crop_ID: crop_id,
        Garden_ID: garden_id,
        Plot_ID: plot_id,
        Type: type,
      },
      { where: { Crop_ID: crop_id } },
    );

    res.status(200).send({ status: 'success' });
  } else {
    res.status(401).send('You are not authorized to update this crop');
  }
});

getByGardenID = catchAsync(async (req, res, next) => {
  garden_id = req.params.id;
  const crop = await Crops.findAll({
    where: { garden_id: garden_id },
  });
  res.status(200).send(crop);
});

getByPlotID = catchAsync(async (req, res, next) => {
  plot_id = req.body.plot_id;
  const crop = await Crops.findAll({
    where: { plot_id: plot_id },
  });
  res.status(200).send(crop);
});

module.exports = {
  getAllCrops,
  addCrops,
  deleteCrop,
  updateCrop,
  getByGardenID,
  getByPlotID,
};
