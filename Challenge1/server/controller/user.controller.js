const User = require('../models/user.model');

const getUsers = async(req,res)=> {
    const user = await User.find();
    res.status(201).json(user);
}

const createUser = async (req, res) => {
    const user = new User(req.body)
    user.save()
        .then(() =>res.json(user))
        .catch((err)=> res.json({"mensaje": "no se pudo guardar"}));
}

const findUserById = async (req, res) =>{
    const { id } = req.params;
    User.findById(id).then((data) => {
        res.json(data);
    }).catch(()=> res.status(404).json({'mensaje': 'ID no encontado'}));
}
const updateUser = async (req,res) => {
    const { id } = req.params;
    await User.updateOne({_id : id}, req.body);
    res.json({ 'mensaje': 'Usuario Actualizado' });
}

const deleteUser = async (req,res) => {
    const { id } = req.params;
    await User.remove({_id : id});
    res.json({ 'mensaje': 'Usuario eliminado' });
}

module.exports= {
    getUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
}