const asyncHandler = require("../../helpers/asyncHandler");

exports.servicesPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/services", {
        title: "Our Services"
    })
});



