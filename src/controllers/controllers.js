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
exports.getBlogs = async (req, res, next) => {
    const locals = {
        title: "All blogs",
    }
    res.render('partials/blogs', locals);
}
exports.getProjects = async (req, res, next) => {
    const locals = {
        title: "Projects",
    }
    res.render('partials/projects', locals);
}
