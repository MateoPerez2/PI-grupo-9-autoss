module.exports = function(sequelize, dataTypes) { 
    //Parametro 1: Sequelize-- para acceder al metodo define 
    //Parametro 2: dataTypes para declarar el tipo de dato que contienen las columnas de la tabla. 
    let alias = 'Product';
    //Identificamos al modelo,
    //osea la tabla de nuestra base de datos que queremos copiar el visual

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

