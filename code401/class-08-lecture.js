'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const User = require('./users');


const SECRET = 'banana';

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user', enum: ['user', 'editor', 'admin']}
}, {toJSON: { virtuals: true }});


// adds a virtual field to our schema that only exists in memory - not in the database
// token: as549sdfbvdfgb
users.virtual('token').get(function () {
  const tokenObj = {
    username:this.username
  }

  return jwt.sign(tokenObj, SECRET);
});

users.virtual('capabilities').get(function () {
  //first create an object that has all of the roles and capabilities
  const acl = {
    user: ['read'],
    editor: ['read', 'create'],
    admin: ['read', 'create', 'update', 'delete']
  }
  //then use that object to find this users role to return that users capabilities
  return acl[this.role]
})

{
  username: 'bob',
  password: 'foo',
  role: 'admin',
  capability: ['read', 'create', 'update', 'delete'],
  token: 'sdfbhgtrg'
}