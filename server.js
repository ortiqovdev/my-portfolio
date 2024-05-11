const express = require('express');
const hbs = require('express-handlebars');


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("public"))

app.set('view engine', '.hbs');
app.set("views", "./views");
app.engine('hbs', hbs.engine({ extname: 'hbs'}))


app.use('/', require('./src/routes/routes'));

// 404 not found
app.use((req, res, next) => {
   const locals = {
      title:"Page Not Found"
   }
   res.status(404).render("error/errMassage", locals)
})

const PORT = process.env.PORT || 5100
app.listen(PORT, () => {
   console.log(`Server is running on port: http://localhost:${PORT}`)
})
