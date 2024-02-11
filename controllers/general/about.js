const asyncHandler = require("../../helpers/asyncHandler");

exports.aboutPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/about", {
        title: "About Us"
    })
});



