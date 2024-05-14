const { User, Garden , Resource , Event , Article , Partnership , Crops , Plots} = require('../models');




User.hasMany(Garden, { foreignKey: 'OwnerID' });
Garden.belongsTo(User, { foreignKey: 'OwnerID', as: 'User' });


User.hasMany(Article, { foreignKey: 'OwnerID' });
Article.belongsTo(User, { foreignKey: 'OwnerID', as: 'User'  });


User.hasMany(Resource, { foreignKey: 'OwnerID' });
Resource.belongsTo(User, { foreignKey: 'OwnerID', as: 'User'  });


User.hasMany(Event, { foreignKey: 'UserID' });//////I don't know if it's true or not





Garden.hasMany(Plots, { foreignKey: 'Garden_ID' });
Plots.belongsTo(Garden, { foreignKey: 'Garden_ID' });


Garden.hasMany(Crops, { foreignKey: 'Garden_ID' });
Crops.belongsTo(Garden, { foreignKey: 'Garden_ID' });


Garden.hasMany(Event, { foreignKey: 'Garden_ID' });
Event.belongsTo(Garden, { foreignKey: 'Garden_ID' });


Garden.hasMany(Partnership, { foreignKey: 'Garden_ID' });
Partnership.belongsTo(Garden, { foreignKey: 'Garden_ID' });









/*$$$$$$$$$$<Crop associaitions>$$$$$$$$$$$$*/
Crops.belongsTo(Plots, { foreignKey: 'Plot_ID' });




/*$$$$$$$$$$<Plot associaitions>$$$$$$$$$$$$*/
Plots.hasOne(Crops, { foreignKey: 'Plot_ID' });



