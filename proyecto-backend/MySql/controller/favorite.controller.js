const { Fav } = require('../models/favorite.model');
const favController = {};

favController.getAllFavorites = async (req, res) => {
    const response = await Fav.findAll()
        .then(data => {
            return { error: false, data: data}
        }).catch(error => {
            return { error: true, message: error}
        });
        res.json(response);
}

favController.getAllUserFavorites = async (req, res) => {
    try {
        const { userId } = req.params;
        const response = await Fav.findAll({
            where: { user_id: userId }
        }).then(data => {
            return { error: false, data: data }
        }).catch(error => {
            return { error: true, message: error}
        });
        res.json(response);
    } catch (err) {
        console.log(err);
    }
}
/**
 * Esta funcion se encarga de agregar un producto a los favoritos de un usuario, pero si el usurio ya tiene ese producto en favorito este se eliminara de la lista, con esto me ahorro tener que hacer muchos fetchs en el front y directamente controlarlo en el back.
 */
favController.manageFavorites = async (req, res) => {
    try {
        const response = await Fav.findOne({
            where: {user_id: req.body.userId, product_id: req.body.productId}
        }).then(data => {
            console.log(data);
            if(data)
            {
                const res = Fav.destroy({
                    where:{ user_id: req.body.userId, product_id: req.body.productId}
                }).then(data => {
                    return {error: false, message: 'El producto fue eliminado de favoritos'}
                })
                return res;
            }else{
                const modelData= {
                    user_id: req.body.userId,
                    product_id: req.body.productId
                }
                const res = Fav.create(modelData)
                    .then(data => {
                        return {error: false, data:data, message: 'Producto agregado a favoritos'}
                    }).catch(error => {
                        return { error: true, message: error}
                    });
                    return res;
            }
        })
        res.json(response);
    } catch (err) {
        console.log(err);
    }
}

module.exports = favController;