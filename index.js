const sequelize = require('./config/connection');
const express = require('express');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const path = require('path');
const sequelize = require('./config/connection');
const session = require('express-session')
const exphs = require('express-handlebars');
const helpers = require('./utils/helpers');
const controllers = require('./controllers')




const app = express()
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'super, secret, secret',
    cookie: {},
    resave: false,
    saveUnintialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess));



sequelize.sync({ force: false}).then(()=> {
    app.listen(PORT, () => console.log( `now listening on: ${PORT}`))
});

