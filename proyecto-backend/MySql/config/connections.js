const { User } = require('../models/user.model');
const { Product } = require('../models/product.model');
const { Category } = require('../models/category.model');
const { RateProducts } = require('../models/rateProducts.model');
const { Coment } = require('../models/coment.model');
const { Fav } = require('../models/favorite.model');
const DBMysql = require('./mysql.config');


Category.hasMany(Product,{
    foreignKey: 'categoryId',
    sourceKey: 'category_id'
})
Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    targetKey: 'category_id'
});

Category.sync();
Product.sync();
User.sync();
Coment.sync();
Fav.sync();
RateProducts.sync();

DBMysql.sync()
    .then(()=> console.log("Conectado con exito a MySql"))
    .catch(err=> console.log(err));