const jwt = require('jsonwebtoken');

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"]; //standard
    if(!token){
        return res.status(403).send({message: "No hay token de acceso"});
    }
    jwt.verify(token, process.env.SECRET, (err,decode) => {
        if(err){
            return res.status(403).send({message: "El token de accesso es invalido"});
        }
        req.userId = decode.indexOf;
        next();
    })
}

module.exports = verifyToken;