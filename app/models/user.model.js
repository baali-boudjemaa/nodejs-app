module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
        ,
        email: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        }
    });

    return User;
};
