const { User, Garden } = require('.');

User.hasMany(Garden, { foreignKey: 'OwnerID' });

Garden.belongsTo(User, { foreignKey: 'OwnerID', as: 'User' });
