const express = require('express');
const router = express.Router();
const UserRouter = require('./user.routes');
const auth = require('../auth/auth');


router.use(`/user`, auth, UserRouter);

//router.use(`/auth`, route);

module.exports = router;