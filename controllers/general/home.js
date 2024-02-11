const asyncHandler = require("../../helpers/asyncHandler");

exports.homePageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/home", {
        title: "Home"
    })
});





