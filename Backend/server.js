const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Import routes
const houseRoutes = require('./routes/houseRouter');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://rohitkumar:eDApVnOtzphyaMkT@cluster0.tcmmyut.mongodb.net/Real-Estate-Technologies', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());


app.use('/api/houses', houseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
