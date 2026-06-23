

const allUsers = [];

const showForm = (req,res)=>{

    // res.sendFile(path.join(__dirname,"../views/contact.html")
    // );

    res.render('contact');
};


const handleForm = (req,res)=>{

       const formData = {
        id: allUsers.length + 1,
        ...req.body};

       allUsers.push(formData);


    
res.render('home-added',{users : allUsers});

};



module.exports = {
    showForm,
    handleForm,
    allUsers
};