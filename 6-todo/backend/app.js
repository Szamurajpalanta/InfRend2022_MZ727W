const express = require('express');
const routes = require('./routes');
const { sequelize, Task } = require('./models')
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());
app.use('/api', routes);

app.listen({port: 3000}, async () => {    
    await sequelize.authenticate();
    await Task.sync({ alter: true });
    console.log('Database connected!');
    console.log('Listening on port 3000...');
});