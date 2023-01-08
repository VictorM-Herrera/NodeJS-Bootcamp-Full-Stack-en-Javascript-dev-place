const { Category } = require('../models/category.model');
const categoryController = {};

categoryController.getAllCategory = async (req, res) => {
    const response = await Category.findAll()
        .then((data) => {
            const res = { error: false, data: data }
            return res;
        }).catch((error) => {
            const res = { error:true, message: error}
            return res;
        })
        res.json(response);
}

categoryController.createCategory = async (req,res) => {
    try {
        const modelData = {
            name: req.body.name,
        }
        const response = await Category.create(modelData)
            .then((data) => {
                const res = { error: false, data: data, message: 'Categoria creada' }
                return res;
            }).catch( error => {
                const res = { error: true, message: error}
                return res;
            });
            res.json(response);
    } catch (err) {
        console.log(err);
    }
}

categoryController.deleteCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Category.destroy({
            where: { category_id: id }
        })
        .then((data) => {
            const res = { error: false, menssage: 'Categoria borrada'}
            return res;
        }).catch(err => {
            const res = { error: true, message: err}
            return res;
        });
        res.json(response);
    } catch (err) {
        console.log(err);
    }
}

categoryController.updateCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Category.update(req.body, {
            where: { category_id: id}
        }).then((data) => {
            const res = { error: false, data: data, message: 'Categoria actualizada'}
            return res;
        }).catch(error => {
            const res = {error: true, message: error}
            return res;
        });
        res.json(response);
    } catch (err) {
        console.log(err);
    }
}

module.exports = categoryController;