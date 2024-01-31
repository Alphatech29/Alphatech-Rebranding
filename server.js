const express = require("express");
const helmet = require("helmet");
const hpp = require("hpp");
const path = require("path");
const logger = require("./helpers/logger");
const errorMiddleWare = require("./middleware/errorMiddleware");
const cookieParser = require("cookie-parser");
const generalRoute = require('./routes/general/general');

try {

     //Require ENV
  require("dotenv").config();

  const app = express();

//Helmet

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

  //Hpp Security
  app.use(hpp());

  // view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.use(express.json({ limit: "500mb" }));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(express.static(path.join("public")));


//Rot
app.use("/", generalRoute)


  //Error Middleware
  app.use(errorMiddleWare);



  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => console.log("Server Successful Connectd to",PORT));

  process.on("uncaughtException", function (err) {
    logger.debug(err);
  });

  process.on("unhandledRejection", (reason, promise) => {
    logger.debug(reason);
  });
} catch (error) {
  logger.debug(error);
}
