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
// exports.postAdmin = async (req, res, next) => {
//   const locals = {
//     title: "Admin page",
//   }
//   const isAdmin = {
//     firstName : "Akmalbek",
//     passCode : "1730"
//   }
//   if (isAdmin == true){
//     res.render('admin/adminIndex', locals);
//   }else{
//     res.rediect('/')
//   }
// }