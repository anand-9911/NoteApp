const mongoose = require('mongoose');
const Constants = require('./constants');

const connectDB = async () => {
  try {
    await mongoose.connect(Constants.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
