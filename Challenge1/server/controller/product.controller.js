const Product = require('../models/product.model');

const getProducts = async (req, res) => {
    const product = await Product.find();
    res.status(201).json(product);
}
const createProduct = async (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then(() =>res.json(product))
        .catch((err)=> res.json({"mensaje": "no se pudo guardar"}));
}

const findProductById = async (req, res) =>{
    const { id } = req.params;
    Product.findById(id).then((data) => {
        res.json(data);
    }).catch(()=> res.status(404).json({'mensaje': 'ID no encontado'}));
}

const updateProduct = async (req,res) => {
    const { id } = req.params;
    await Product.updateOne({_id : id}, req.body);
    res.json({ 'mensaje': 'Producto Actualizado' });
}

const deleteProduct = async (req,res) => {
    const { id } = req.params;
    await Product.remove({_id : id});
    res.json({ 'mensaje': 'Producto eliminado' });
}

module.exports= {
    getProducts,
    createProduct,
    findProductById,
    updateProduct,
    deleteProduct
}