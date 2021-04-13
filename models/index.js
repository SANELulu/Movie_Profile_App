const User = require('./user');
const favMovie = require('./favmovies');

User.hasMany(favMovie, {
    foreignKey: 'user_id',
    onDelete: 'Cascade',

});

favMovie.belongsTo(User, {
    foreignKey: 'movie_url'
});

module.exports = {User, favMovie};