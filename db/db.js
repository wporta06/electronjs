const mongoose = require('mongoose');
// require('dotenv').config()
  const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://ja2iza:ja2iza@cluster0.exkwp.mongodb.net/precreatif?retryWrites=true&w=majority")
      
    } catch (error) {
      console.log(error)
      process.exit(1)
    } 
  }
  
  module.exports = connectDB