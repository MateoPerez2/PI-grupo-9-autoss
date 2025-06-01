module.exports = function(sequelize, dataTypes) {
    let alias = 'Product';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Idusuario: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING(100)
        },
        nombre: {
            type: dataTypes.STRING(80)
        },
        descripcion: {
            type: dataTypes.STRING(150)
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "Idusuario"
        });

        Product.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "Idproducto"
        });
    };

    return Product;
} 