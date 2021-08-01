module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        }
    });

    return User;
};
