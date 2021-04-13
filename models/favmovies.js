const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class favMovie extends Model {}

favMovie.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        movie_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // issues with this -- need to fix
        
        movie_url: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'user',
                key: 'movie_url'
            }
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favmovie',
    }
    );

    module.exports = favMovie;