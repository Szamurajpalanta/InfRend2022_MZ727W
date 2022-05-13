const express = require('express');
const routes = require('./routes');
const { sequelize, Todo } = require('./models')

const app = express()
app.use(express.json())
app.use('/api', routes);

app.listen({port: 3000}, async () => {    
    await sequelize.authenticate();
    await Todo.sync({ alter: true });
    console.log('Database connected!');
    console.log('Listening on port 3000...');
});