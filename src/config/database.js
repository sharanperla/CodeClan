const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://nnm23mc133:EcCcMt7P1Srp3GdC@codeclan.gd3om.mongodb.net/?retryWrites=true&w=majority&appName=CodeClan'
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
