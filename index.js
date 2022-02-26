const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');
const path = require('path');


const db = require('./config/db')
const route = require('./routes');

const SortMiddleware = require('./app/middleware/SortMiddleware')


const app = express();
const port = 3000;

// Connect to db
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'))

// Custom Middleware - bài 35 sort Middleware
app.use(SortMiddleware)

// http logger
app.use(morgan('combined'));

const handlebar = handlebars.create({ 
    extname: '.hbs',
    helpers: require('./helpers/handlebars')
});

// template engine
app.engine('hbs', handlebar.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
