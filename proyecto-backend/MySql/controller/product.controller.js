const { Product } = require('../models/product.model');
const productController = {};

productController.getAllProducts = async (req, res) => {
    const response = await Product.findAll()
        .then((data) => {
            const res = { error: false, data: data }
            return res;
        }).catch((error) => {
            const res = {error: true, message: error}
            return res;
        })
        res.json(response);
}

productController.createProduct = async (req, res) => {
    try {
        if(req.file === undefined)
        {
            return res.status(400).send({message: 'No se subio un archivo'});
        }
        const url = req.protocol + '://' + req.get('host');
        const urlImage = url + '/upload/' + req.file.filename;
        const modelData = {
            title: req.body.title,
            description: req.body.description,
            image: urlImage,
            stock: req.body.stock,
            price: req.body.price,
            categoryId: req.body.categoryId
        }
        const response = await Product.create(modelData)
            .then((data) => {
                const res = {error: false, data: data, message: 'Producto creado'}
                return res;
            }).catch( e => {
                if(e.name=='SequelizeUniqueConstraintError' ||e.name=='SequelizeValidationError'){
                    return { error: true, message: e.errors.map(err=>err.message)}
                }
                else if(e.name=='SequelizeForeignKeyConstraintError'){
                    return   { error: true, message:['The category does not exist']}
                }
                return { error: true, message: e }
            });
            res.json(response);
    }catch(err){
        console.log(err);
    }
}

productController.getByIdProduct = async (req, res) =>{
    try{
        const { id } = req.params;
        const response = await Product.findAll({
            where: { product_id: id}
        }).then((data) => {
            const res = { error: false, data: data }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    }catch(err) {
        console.log(err);
    }
}

productController.getByCategoryProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const response = await Product.findAll({
            where: {categoryId: id}
        }).then((data) => {
            const res = { error: false, data: data }
            return res;
        }).catch(error => {
            const res = { error: true, message: error}
            return res;
        });
        res.json(response);
    }catch(err){
        console.log(err);
    }
}

productController.updateProduct = async (req,res) => {
    try {
        const { id } = req.params;
        const response = await Product.update(req.body, {
            where: { product_id: id }
        }).then((data) => {
            const res = { error:false, data:data, message:'Producto actualizado'}
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

productController.deleteProduct = async (req, res) => {
    try{
        const { id } = req.params;

        const response = await Product.destroy({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: 'Producto eliminado'}
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    }catch(e){
        console.log(e);
    }
}


module.exports = productController