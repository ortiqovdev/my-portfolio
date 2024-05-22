require('dotenv').config()
const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("public"))

app.set('view engine', '.hbs');
app.set("views", "./views");
app.engine('hbs', hbs.engine({ extname: 'hbs' }))


app.use('/', require('./src/routes/routes'));

// begona sorov yuborishni cheklash
app.get('*', (req, res) => {
   res.redirect('/');
});

app.get('/', (req, res, next) => {
   const { originalUrl } = req;

   if (originalUrl === '/' || originalUrl === '/admin' || originalUrl === '/blog' || originalUrl === '/login') {
      next();
   } else {
      res.redirect('/');
   }
});

const DB_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 5100

app.listen(PORT, () => {
   console.log(`Server is running on port: http://localhost:${PORT}`)
})

// const startApp = async () => {
//    try {
//       await mongoose.connect(DB_URL).then(() => {
//          console.log('Connected mongoDB')
//       })

//    } catch (error) {
//       console.log(`Database error:  ${error}`)
//    }
// }
// startApp()