const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
require('dotenv').config();


// Connect to database
connectDB();

// init middleware
app.use(express.json({ extended: false }));
app.use(cors());





// // Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/address', require('./routes/api/address'));
app.use('/api/order', require('./routes/api/order'));
app.use('/api/contact', require('./routes/api/contact'));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
