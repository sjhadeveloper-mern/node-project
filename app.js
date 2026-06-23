// console.log("hello");

const express = require("express");
const app = express();

const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');
const errorRouter = require('./routes/errorRouter');
const favouritesRouter = require('./routes/favouritesRouter');

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(homeRouter);

app.use("/contact",contactRouter);


app.use(favouritesRouter);
app.use(errorRouter);

const PORT = 3001;

app.listen(PORT,()=>{
    console.log("server is running on the http://localhost:"+ PORT);
});



