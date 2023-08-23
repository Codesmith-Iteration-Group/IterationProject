const rootController = {};

// lol maybe we should put this in cookieController....
rootController.checkCookie = (req, res, next) => {
    if (req.cookies.userId) {
        res.locals.cookieStatus = true;
    } else res.locals.cookieStatus = false;
    return next();
};


module.exports = rootController;