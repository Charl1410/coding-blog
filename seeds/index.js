const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

//   await ();

  process.exit(0);
};

seedAll();
