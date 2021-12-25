const express = require('express');
const {sequelize, User} = require('./database/models');

const app = express();
app.use(express.json());

app.get('/users/:uuid', async (req, res) => {
  const {
    params: {uuid},
  } = req;
  try {
    const user = await User.findOne({where: {uuid}});

    return res.json(user);
  } catch (e) {
    console.error(e);

    return res.status(500).json({error: 'unable to retrieve user'});
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();

    return res.json(users);
  } catch (e) {
    console.error(e);

    return res.status(500).json({error: 'unable to retrieve users'});
  }
});

app.post('/users', async (req, res) => {
  const {name, email, role} = req.body;

  try {
    const user = await User.create({email, name, role});

    return res.json(user);
  } catch (e) {
    console.error(e);

    return res.status(500);
  }
});

app.listen({port: 5000}, async () => {
  console.log('server up on http://localhost:5000');
  await sequelize.authenticate();
  console.log('connected to db successfully!');
});
