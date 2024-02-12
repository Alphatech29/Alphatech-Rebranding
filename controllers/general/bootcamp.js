const asyncHandler = require("../../helpers/asyncHandler");

exports.bootcampPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/bootcamp", {
        title: "Bootcamp"
    })
});