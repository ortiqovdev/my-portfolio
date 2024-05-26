exports.getAdminLogin = async (req, res, next) => {
  const locals = {
    title: "Admin page",
  }
  res.render('admin/adminLogin', locals);
}
exports.getAdmin = async (req, res, next) => {
  const locals = {
    title: "Admin page",
  }
  res.render('admin/adminIndex', locals);
}