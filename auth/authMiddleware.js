//https://github.com/RisingStack/nodehero-authentication/blob/master/app/authentication/middleware.js
function authenticationMiddleware () {
    return function (req, res, next) {
        console.log(req.isAuthenticated())
        if (req.isAuthenticated()) {
            return next()
        }
        res.redirect('/')
    }
}

module.exports = authenticationMiddleware;