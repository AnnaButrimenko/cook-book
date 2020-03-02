const express = require('express');
const app = express();
const  mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const port = 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Import routes
const recipesRoute = require('./routes/recipes');

//ROUTES
app.get('/', (reg, res) => {
  res.send('We are on home')
  }
);

app.use('/recipes', recipesRoute);



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true,
            useUnifiedTopology: true},() => {
  console.log('Connect to DB')
});

app.listen(port, () => console.log(`Server running on port ${port}`));