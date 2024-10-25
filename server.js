require('dotenv').config();
const express = require('express');
const { connectDB, sequelize } = require('./config/db.js');

const app = express();
connectDB();
app.use(express.json());

// Sync all models
sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
});

app.use('/api/tasks', require('./routes/taskRoute.js'));
app.use('/api/guests', require('./routes/guests'));
app.use('/api/budget', require('./routes/budgetRoute.js'));
app.use('/api/catering', require('./routes/catering.js'));
app.use('/api/venue', require('./routes/venue.js'));
app.use('/api/music', require('./routes/music.js'));
app.use('/api/decoration', require('./routes/decoration.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
