const sequelize = require('../config/connection');
const { User, favMovie} = require('../models');

const userData = require('./userData.json');
const favMovieData = require('./favmovieData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const favmovie of favMovieData) {
    await favMovie.create({
      ... favmovie,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
}
  process.exit(0);
};

seedDatabase();
