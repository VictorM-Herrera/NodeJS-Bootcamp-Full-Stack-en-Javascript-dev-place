function validateRequest(req,res,next,schema)
{
    const option = { 
        abortEarly: false,
        allowUnknown: true,
        stripUnkown: true
    };
    const {error,value} =schema.validate(req.body, options);

    if(error){
        console.log(error);
        res.status(400).json({message: `${error.details.map(x => x.message).join(', ')}`});
    }else{
        req.body = value;
        next();
    }
}

module.exports = validateRequest;