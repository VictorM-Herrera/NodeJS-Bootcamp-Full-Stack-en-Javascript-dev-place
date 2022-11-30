const Recurso = require('../models/Recurso.model');
const userModel = require('../models/user.model');

const getAll= async (req, res)=>{
    const recurso = await Recurso.find();
    res.status(201).json(recurso);
}
const getRecursosById = async (req,res)=>{
    const { idRecurso } = req.params;
    Recurso.findById(idRecurso)
        .then((data)=>{res.json(data)})
        .catch(()=> res.status(404).json({'msj': 'ID del recurso no encontrado'}));
}

const createRecurso = async (req,res) =>{
    const recurso = new Recurso(req.body);
    recurso.save()
        .then(()=> res.json(recurso))
        .catch((err) => res.json({'msj': 'no se pudo crear'}));
}

const updateRecurso = async (req,res) =>{
    const { id } = req.params;
    await Recurso.updateOne({idRecurso : id}, req.body);
    res.json({'mensaje': 'Usuario Actualizado'});
}


module.exports={
    getAll,
    getRecursosById,
    createRecurso,
    updateRecurso,
}