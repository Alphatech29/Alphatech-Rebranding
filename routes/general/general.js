const { homePageGet } = require("../../controllers/general/home");
const { blogPageGet , singlePageGet } = require("../../controllers/general/blog");
const { contactPageGet } = require("../../controllers/general/contact");









const generalRoute = require("express").Router();

//HOMEPAGE
generalRoute.route("/").get(homePageGet)

//BLOGPAGE
generalRoute.route("/blog").get(blogPageGet)

//SINGLEBLOGPAGE
generalRoute.route("/post").get(singlePageGet)


//CONTACTPAGE
generalRoute.route("/contact-us").get(contactPageGet)




module.exports = generalRoute