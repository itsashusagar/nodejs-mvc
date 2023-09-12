const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskController = require('./controllers/taskController');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/tasks', taskController);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
