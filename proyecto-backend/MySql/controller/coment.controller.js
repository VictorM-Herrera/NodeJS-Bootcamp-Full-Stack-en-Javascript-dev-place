const {Coment} = require('../models/coment.model');
const comentController = {};

comentController.getAllComents = async (req, res) => {
    const response = await Coment.findAll()
    .then((data) => {
        const res = {error:true, data:data}
        return res;
    }).catch((error) => {
        const res = {error:true, message:error}
        return res;
    });
    res.json(response);
}
comentController.getAllComentsByProductId = async (req, res) => {
    try{
        const { id } = req.params;
        const response = await Coment.findAll({
            where: {product_id: id}
        }).then((data) => {
            const res = {error:false, data:data}
            return res;
        }).catch(error => {
            const res = { error: true, error:error}
            return res;
        });
        res.json(response);
    }catch(err)
    {
        console.log(err);
    }
}

comentController.createComent = async (req,res) => {
    try {
        const response = await Coment.findOne({
            where: { user_id: req.body.userId, product_id: req.body.productId}
        }).then( (data) => {
            if(data)
            {
                return {error: true, data: data, message: 'El Usuario ya ha comentado este producto'}
            }else{
                const modelData = {
                    user_id: req.body.userId,
                    product_id: req.body.productId,
                    message: req.body.message
                }
                const res = Coment.create(modelData)
                    .then((data)=> {
                        const res = {error: false, data:data,message: 'Se ha publicado el comentario'}
                        return res;
                    }).catch((error) => {
                        if (error.name ==  'SequelizeForeignKeyConstraintError') {
                            return {error: true, message: ['El usuario o el producto no existen']}
                        }
                        return {error:true, message: error}
                    });
                    return res;
            }
        }).catch((error)=>{
            const res = {error: true, message:error}
            return res;
        })
        res.json(response);
    } catch (err) {
        console.log(err);
    }
}

comentController.deleteComentbyUserId = async (req, res) => {
    try {
        const { comentId, userId } = req.params;
        const response = await Coment.destroy({
            where:{ coment_id: comentId , user_id: userId}
        }).then((data) => {
            const res = {error: false, data: data, message: 'Comentario Eliminado'}
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

comentController.updateComent = async (req, res) => {
    try {
        const { comentId, userId } = req.params;
        const response = await Coment.update(req.body,{
            where:{coment_id: comentId , user_id: userId}
        }).then(data => {
            return {error: false, data: data, message: 'Comentario Actualizado'}
        }).catch( error => {
            return {error: true, message: error}
        });
        res.json(response);
    } catch (err) {
        console.log(err);
    }
}

module.exports = comentController;