module.exports = function(sequelize, dataTypes) {
    let alias = 'User';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(30),
        },
        usuario: {
            type: dataTypes.STRING(30),
        },
        contrasenia: {
            type: dataTypes.STRING(60)
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto_perfil: {
            type: dataTypes.STRING(100)
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "Idusuario"
        });

        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "Idusuario"
        });
    };

    return User;
} 