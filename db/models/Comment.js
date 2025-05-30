module.exports = function(sequelize, dataTypes) {
    let alias = 'Comment';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Idproducto: {
            type: dataTypes.INTEGER
        },
        Idusuario: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING(200)
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,
        paranoid: true,  // Esto habilita el soft delete (deletedAt)
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    };

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models) {
        Comment.belongsTo(models.User, {
            as: "user",
            foreignKey: "Idusuario"
        });

        Comment.belongsTo(models.Product, {
            as: "product",
            foreignKey: "Idproducto"
        });
    };

    return Comment;
} 