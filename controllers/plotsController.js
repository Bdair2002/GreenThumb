const db = require('./../models/plotsModel');
const catchAsync = require('../utils/catchAsync');
const db1 = require('./../models/gardenModel');
const db2 = require('./../models/cropsModel');
const factory = require('./factoryController');
const gardenController = require('./gardenController');
const Crops = db2.Crops;
const Plots = db.Plots;
const Garden = db1.Garden;

function addPlots(garden_id, plotsNumber) {
  for (i = 0; i < plotsNumber; i++) {
    const newPlot = Plots.create({
      Garden_ID: garden_id,
    });
  }
}

getAllPlots = factory.getAll(Plots);

getPlotByGardenID = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const myPlots = await Plots.findAll({
    where: { garden_id: id },
  });
  res.status(200).send(myPlots);
});
getPlotByID = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const myPlot = await Plots.findOne({
    where: { plot_id: id },
  });
  res.status(200).send(myPlot);
});
updatePlot = catchAsync(async (req, res, next) => {
  plot_id = req.params.id;

  const { Crop, Planting_Date } = req.body;
  if (gardenController.check) {
    updateCrop1 = await Crops.update(
      {
        Type: Crop,
        Planting_Date: Planting_Date,
        Harvested: false,
      },
      {
        where: { Plot_ID: plot_id, Harvested_Date: null },
      },
    );

    if (updateCrop1[0] > 0) {
      const updatePlot = await Plots.update(
        {
          Crop: Crop,
          Planting_Date: Planting_Date,
          Available: false,
        },
        {
          where: { Plot_ID: plot_id },
        },
      );

      res.status(200).send(updateCrop1);
    } else {
      res
        .status(401)
        .send('You Cannot Update The Type of Crop without Planting it!');
    }
  } else {
    res.status(401).send('You are not authorized to update this plot');
  }
});

deletePlot = catchAsync(async (req, res, next) => {
  plot_id = req.params.id;
  const plot = await Plots.findOne({
    where: { Plot_ID: plot_id },
  });

  const garden = await Garden.findOne({
    where: { id: plot.Garden_ID },
  });
  console.log('plots  :' + garden.Plots);
  console.log(garden.owner_id);
  if (garden.owner_id === req.user.id) {
    const deleteCrop = await Crops.destroy({
      where: { Plot_ID: plot_id },
    });
    const deletePlot = await Plots.destroy({
      where: { Plot_ID: plot_id },
    });
    res.status(204).json({ deletePlot });
    const updatePlot = await Garden.update(
      {
        Plots: garden.Plots - 1,
      },
      {
        where: { id: garden.id },
      },
    );
  } else {
    res.status(401).send('You are not authorized to delete this plot');
  }
});

getRotation = catchAsync(async (req, res, next) => {
  if (gardenController.check) {
    plot_id = req.params.id;
    const crops = await Crops.findAll({
      where: {
        Plot_ID: plot_id,
      },
      order: [['Planting_Date', 'ASC']],
    });
    res.status(200).send(crops);
  } else {
    res
      .status(401)
      .send('You are not authorized to get the rotation for this plot');
  }
});

plantCrop = catchAsync(async (req, res, next) => {
  plot_id = req.params.id;
  const Crop = req.params.Type;
  const available = await Plots.findOne({ where: { Plot_ID: plot_id } });
  if (available.Available) {
    const currentDate = new Date();

    Planting_Date = currentDate;

    if (gardenController.check) {
      const updatePlot = await Plots.update(
        {
          Crop: Crop,
          Available: false,
          Planting_Date: Planting_Date,
          Garden_ID: available.Garden_ID,
          Harvested: false,
        },
        {
          where: { Plot_ID: plot_id },
        },
      );
      const getGradenID = await Plots.findOne({ where: { Plot_ID: plot_id } });
      const updateCrop = await Crops.create({
        Plot_ID: plot_id,
        Garden_ID: getGradenID.Garden_ID,
        Planting_Date: Planting_Date,
        Harvested: false,
        Type: Crop,
      });
      res.status(201).send(updateCrop);
    } else {
      res.status(401).send('You are not authorized to update this plot');
    }
  } else {
    res.status(401).send('Already Planted');
  }
});

harvestPlot = catchAsync(async (req, res, next) => {
  const plot_id = req.params.id;
  planted = await Plots.findOne({ where: { Plot_ID: plot_id } });
  if (!planted.Available) {
    const currentDate = new Date();

    Harvested_Date = currentDate;

    if (gardenController.check) {
      const updatePlot = await Plots.update(
        {
          Available: true,
          Crop: null,
          Harvested_Date: Harvested_Date,
        },
        {
          where: { Plot_ID: plot_id },
        },
      );

      const updateCrop = Crops.update(
        {
          Harvested_Date: Harvested_Date,
          Harvested: true,
        },
        {
          where: { Plot_ID: plot_id, Harvested: false },
        },
      );
      res.status(201).send('Harvested  Successfully');
    } else {
      res.status(401).send('You are not authorized to harvest this plot');
    }
  } else {
    res.status(401).send('Not Planted');
  }
});

module.exports = {
  addPlots,
  getAllPlots,
  updatePlot,
  getPlotByGardenID,
  getPlotByID,
  deletePlot,
  plantCrop,
  harvestPlot,
  getRotation,
};

//search by garden id
//delete by garden id and check owner id
