const mongoose = require('mongoose');

let db = "mongodb://127.0.0.1:27017/laundry_system";
// if(process.env.NODE_ENV === 'production') {
//   db = process.env.mongoURI
// }else {
//   db = config.get('mongoURI')
// }

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('mongodb connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
