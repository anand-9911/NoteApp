const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//Connecting to dataBase
connectDB();

//BodyParser Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('App Started');
});

//Defining Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
