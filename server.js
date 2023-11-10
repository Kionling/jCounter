const express = require("express");
const app = express();
const sequelize = require("sequelize");
const PORT = process.env.PORT || 8080
const db = require("./models")

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

db.sequelize.sync().then(function(){
    app.listen(PORT, ()=>{
        console.log(`App listening on ${PORT}`)
    })
})