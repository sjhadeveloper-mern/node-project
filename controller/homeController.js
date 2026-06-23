

const { allUsers } = require("./contactController");

const showHomePage = (req,res)=>{
   // res.sendFile(path.join(__dirname,"../views/home.html"));      serving static HTML files

   res.render('home');

};


const showHomeDetails = (req,res)=>{

const id = Number(req.params.id);

const selectedHome = allUsers.find(
    user=> user.id === id
);


res.render("home-details",{

    home: selectedHome
});





}

module.exports = {
    showHomePage,
    showHomeDetails
};