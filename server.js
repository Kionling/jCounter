const express = require("express");
const app = express();
const sequelize = require("sequelize");
const PORT = process.env.PORT || 8080
const db = require("./models")
const session = require("express-session");
const SESSION_SECRET = process.env.SESSION_SECRET || "sample secret";
const passport = require("./config/passport")
const bcrypt = require("bcryptjs");
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/test-secret", (req, res) => {
  if (SESSION_SECRET !== process.env.SESSION_SECRET) {
    // the secret shoud be retrieved from environmental variables to really be a secret
    res.send("The secret is not secure — using development version");
  } else if (SESSION_SECRET.length < 30) {
    // secret should be longer than 30 characters to make it difficult to guess
    res.send("The secret is not secure — too short");
  } else {
    res.send("The secret is secure.");
  }
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

db.sequelize.sync().then(function(){
    app.listen(PORT, ()=>{
        console.log(`App listening on ${PORT}`)
    })
})