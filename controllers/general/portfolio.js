const asyncHandler = require("../../helpers/asyncHandler");

exports.portfolioPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/portfolio", {
        title: "Profolio"
    })
});



