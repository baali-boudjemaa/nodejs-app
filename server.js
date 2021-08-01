const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config()
const app = express();
app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return next();
  }
});
var corsOptions = {
  origin: "http://example.com"
  ,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const controller = require("./app/controllers/tutorial.controller");

const run = async () => {
  const tut1 = await controller.createTutorial({
    title: "Tut#1",
    description: "Tut#1 Description",
  });

  const tut2 = await controller.createTutorial({
    title: "Tut#2",
    description: "Tut#2 Description",
  });

  const comment1 = await controller.createComment(tut1.id, {
    name: "bezkoder",
    text: "Good job!",
  });

  await controller.createComment(tut1.id, {
    name: "zkoder",
    text: "One of the best tuts!",
  });

  const comment2 = await controller.createComment(tut2.id, {
    name: "aKoder",
    text: "Hi, thank you!",
  });

  await controller.createComment(tut2.id, {
    name: "anotherKoder",
    text: "Awesome tut!",
  });

  const tut1Data = await controller.findTutorialById(tut1.id);
  console.log(
    ">> Tutorial id=" + tut1Data.id,
    JSON.stringify(tut1Data, null, 2)
  );

  const tut2Data = await controller.findTutorialById(tut2.id);
  console.log(
    ">> Tutorial id=" + tut2Data.id,
    JSON.stringify(tut2Data, null, 2)
  );

  const comment1Data = await controller.findCommentById(comment1.id);
  console.log(
    ">> Comment id=" + comment1.id,
    JSON.stringify(comment1Data, null, 2)
  );

  const comment2Data = await controller.findCommentById(comment2.id);
  console.log(
    ">> Comment id=" + comment2.id,
    JSON.stringify(comment2Data, null, 2)
  );

  const tutorials = await controller.findAll();
  console.log(">> All tutorials", JSON.stringify(tutorials, null, 2));
};

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});
const db = require("./app/models");


// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route

app.use('/uploads', express.static('./uploads'));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const Routers = require('./app/routes/routes');
const HttpException = require('./app/utils/HttpException');
const errorMiddleware = require('./app/middleware/error.middleware');
require("./app/routes/user.routes")(app);
app.use('/api', Routers);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});