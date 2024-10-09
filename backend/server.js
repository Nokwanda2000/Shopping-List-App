<<<<<<< HEAD
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');
const path = require('path');
=======
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt'); 
const db = require('better-sqlite3')('database.db');
>>>>>>> f4683752b1f5ed8b40c18c41ca1534cf43186b04

// Set default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Custom route for login
server.post('/login', (req, res) => {
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8')).users;
  const user = users.find((user) => user.username === req.body.username && user.password === req.body.password);

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

// Custom route for register
server.post('/register', (req, res) => {
  const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));
  const users = db.users || [];
  const existingUser = users.find((user) => user.username === req.body.username);

  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const newUser = {
    id: users.length + 1,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  users.push(newUser);
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify({ ...db, users }));

  res.status(201).json({ message: 'Registration successful', user: newUser });
});

// Use default router
server.use(router);

// Start the server
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
