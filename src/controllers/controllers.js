exports.getIndex = async (req, res, next) => {
    const locals = {
        title: "Ortiqov Portfolio",
    }
    res.render('partials/index', locals);
}
exports.getLogin = async (req, res, next) => {
    const locals = {
        title: "Login page",
    }
    res.render('partials/login', locals);
}
