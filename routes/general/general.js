const { homePageGet } = require("../../controllers/general/home");
const { blogPageGet , singlePageGet } = require("../../controllers/general/blog");
const { contactPageGet } = require("../../controllers/general/contact");
const { servicesPageGet } = require("../../controllers/general/services");
const { aboutPageGet } = require("../../controllers/general/about");
const { bootcampPageGet } = require("../../controllers/general/bootcamp");





const generalRoute = require("express").Router();

//HOMEPAGE
generalRoute.route("/").get(homePageGet)

//BLOGPAGE
generalRoute.route("/blog").get(blogPageGet)

//SINGLEBLOGPAGE
generalRoute.route("/post").get(singlePageGet)

//CONTACTPAGE
generalRoute.route("/contact-us").get(contactPageGet)

//CONTACTPAGE
generalRoute.route("/services").get(servicesPageGet)

//ABOUTPAGE
generalRoute.route("/about-us").get(aboutPageGet)

//BOOTCAMPPAGE
generalRoute.route("/bootcamp").get(bootcampPageGet)





module.exports = generalRoute