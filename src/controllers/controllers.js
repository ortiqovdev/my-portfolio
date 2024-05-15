exports.getIndex = async (req, res, next) => {
    const locals = {
        title: "Ortiqov Portfolio",
    }
    res.render('partials/index', locals);
}
exports.getProjects = async (req, res, next) => {
    const locals = {
        title: "Ortiqov | Projects",
        onProject: true
    }
    res.render('pages/projects', locals);
}
exports.getEdu = async (req, res, next) => {
    const locals = {
        title: "Ortiqov | Educations",
        onEdu: true
    }
    res.render('pages/edu', locals);
}
exports.getSkills = async (req, res, next) => {
    const locals = {
        title: "Ortiqov | Skills",
        onSkills: true
    }
    res.render('pages/skills', locals);
}
exports.getBlogs = async (req, res, next) => {
    const locals = {
        title: "Ortiqov | blogs",
        onBlogs: true
    }
    res.render('pages/blogs', locals);
}
