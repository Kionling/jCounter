const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: DataTypes.STRING,
        allowNull: false,
    });
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    User.addHook('beforeCreate', function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
    }


    
