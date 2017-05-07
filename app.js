const api = require('./api.js');
const $ = require('jquery');
const users = api.getUsers();
const welcomeUser = require('./welcomeUser.coffee');
const ReactApp = require('./react/ReactApp.js');