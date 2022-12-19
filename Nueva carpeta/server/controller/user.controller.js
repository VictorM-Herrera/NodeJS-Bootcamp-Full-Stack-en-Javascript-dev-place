const { User } = require('../model/user.model');
const bcrypt = require('bcrypt');
const userController = {};
const jwt = require('jsonwebtoken');

userController.getAllUsers = async (req,res) =>{
    const response = await User.findAll() 
        .then((data)=> {
            const res = { error: false, data: data}
            return res;
        }).catch((error) => {
            const res = {error: true, message: error}
            return res;
        })
        res.json(response);
    
}

userController.createUser = async (req,res) => {
    try {
        if(req.file === undefined)
        {
            return res.status(400).send({message: 'No hay un archivo subido'});
        }
        const url = req.protocol + "://" + req.get("host");
        const urlImage = url + "/upload/" + req.file.filename;

        const modelData = {
            username: req.body.username,
            image:urlImage,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        const response = await User.create(modelData)
            .then((data) => {
                const res = {error: false, data: data, message: 'Usuario creado'};
                return res;
            }).catch( error => {
                const res = {error: true, message: error}
                return res;
            });
            res.json(response);
    } catch (err) {
        console.log(err);
    }
}
userController.getUserById = async (req,res) => {
    try{
        const { id } = req.params;
        const response = await User.findAll({
            where: {id:id}
        })
        .then((data)=>{
            const res = { error: false, data: data};
            return res;
        }).catch(err =>{
            const res = { error: true, message: err};
            return res; 
        });
        res.json(response);
    }catch(err)
    {
        console.log(err);
    }
}

userController.updateUserById = async (req,res) => {
    try{
        const { id } = req.params;
        const modelData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
        }
        if(req.body.password)//si hay un nuevo password
        {
            modelData={...modelData, ...{password: bcrypt.hashSync(req.body.password,10)}}; //lo almaceno en modeldata, sin borrar lo que ya habia almacenado
        }
        const response = await User.update(modelData, {
            where: {id:id}
        })
        .then((data)=>{
            const res = { error: false, data: data, message: "Usuario actualizado"};
            return res;
        }).catch(err =>{
            const res = { error: true, message: err};
            return res; 
        });
        res.json(response);
    }catch(err)
    {
        console.log(err);
    }
}

userController.deleteUserById = async (req, res) => {
    try{
        const { id } = req.params;
        const response = await User.destroy({
            where: {id:id}
        })
        .then((data)=>{
            const res = { error: false, data: data, message: "Usuario Eliminado"};
            return res;
        }).catch(err =>{
            const res = { error: true, message: err};
            return res; 
        });
        res.json(response);
    }catch(err)
    {
        console.log(err);
    }
}

userController.userlogin = async (req, res) => {
    User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then((user)=>{
        console.log(user);
        if(!user){
            return res.status(401).send({message: "Usuario no Encontrado"});
        }
        console.log(req.body.password);
        console.log(req.body);
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid)
        {
            return res.status(401).send({message: "Usuario no Encontrado"});
        }

        const tokenAccess = jwt.sign(
            {
                id:user.id
            }, process.env.SECRET,{
            expiresIn: 86400
        });
        user.token = tokenAccess;
        res.status(200).send({
            user,
            tokenAccess
        })
    })
}

module.exports = userController;