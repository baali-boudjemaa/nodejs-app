const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user.controller');
//const signin = require('../routes/SignInRoute');
const auth = require('../middleware/auth')
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');





module.exports = router;