const express = require('express');
const server = express();
const data = require('./Data/productos.json');


const port = process.env.PORT || 3000;
const router= express.Router();

server.listen(port, ()=>{
    console.log(`Servidor en el puerto: ${port}`);
})

server.use(router);

router.get('/productos', (req, res)=>{
    res.json(data.allProducts);
})

router.get('/productos/:title', (req, res)=>{
    const title= req.params.title;
    encontrarProducto(title,res);
})
//funcion aparte
function encontrarProducto(req, res, next){
    let selectedItem;
    data.allProducts.forEach(element => {
        if(element.title == req)
        {
            selectedItem = element
            next();
        }
    });
    res.json(selectedItem);
}
//esta linea de codigo es para testear algo, no darle importancia