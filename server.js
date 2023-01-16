const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
//creating port 
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

//setting up handlebars?
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//serving static content from the public folder 
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/dish-routes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on http/localhost:3001'));
});

//need to add sessin stored information in this file 