const db = require('./../models/plotsModel');
const catchAsync = require('../utils/catchAsync');
const db1 = require('./../models/gardenModel');
const crud = require('./crudController');
const gardenController = require('./gardenController');
const Plots = db.Plots;
const Garden = db1.Garden;

function addPlots(garden_id, plotsNumber) {
  for (i = 0; i < plotsNumber; i++) {
    const newPlot = Plots.create({
      Garden_ID: garden_id,
    });
  }
}

getAllPlots = crud.getAll(Plots);

getPlotByGardenID = catchAsync(async (req, res, next) => {
  const id = req.body.garden_id;

  const myPlots = await Plots.findAll({
    where: { garden_id: id },
  });
  res.status(200).send(myPlots);
});
getPlotByID = catchAsync(async (req, res, next) => {
  const id = req.body.plot_id;

  const myPlot = await Plots.findOne({
    where: { plot_id: id },
  });
  res.status(200).send(myPlot);
});
updatePlot = catchAsync(async (req, res, next) => {
  const { garden_id, plot_id, Crop, Available } = req.body;
  if (gardenController.check) {
    const updatePlot = await Plots.update(
      {
        Crop: Crop,
        Available: Available,
      },
      {
        where: { Garden_ID: garden_id, Plot_ID: plot_id },
      },
    );
    res.status(201).send(updatePlot);
  } else {
    res.status(401).send('You are not authorized to update this plot');
  }
});

deletePlot = catchAsync(async (req, res, next) => {
  plot_id = req.body.plot_id;
  console.log('plots id :' + plot_id);
  const plot = await Plots.findOne({
    where: { Plot_ID: plot_id },
  });

  const garden = await Garden.findOne({
    where: { id: plot.Garden_ID },
  });
  console.log('plots  :' + garden.Plots);
  console.log(garden.owner_id);
  if (garden.owner_id === req.user.id) {
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

module.exports = {
  addPlots,
  getAllPlots,
  updatePlot,
  getPlotByGardenID,
  getPlotByID,
  deletePlot,
};

//search by garden id
//delete by garden id and check owner id
