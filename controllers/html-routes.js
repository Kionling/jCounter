const db = require("../models");
const passport = require("passport");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const sequelize = require("sequelize");


module.exports = {
    create: function (req, res) {
        db.User.create(req.body)
            .then(function (dbUser) {
                res.json(dbUser);
            });
    }

}