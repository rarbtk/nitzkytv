const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/users",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
.then(db => console.log("se conecto la base de datos"))
.catch(err => console.log(err));