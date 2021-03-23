//node modules
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphs = require('express-handlebars');
const controllers = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//using express
const app = express();
const PORT = process.env.PORT || 3001;

//sets up hb 
const hbs = exphs.create({ helpers});


//dont quite understand this 
const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUnintialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//using this template
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(controllers);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, ()=> console.log(`now listening on: ${PORT}`))
});