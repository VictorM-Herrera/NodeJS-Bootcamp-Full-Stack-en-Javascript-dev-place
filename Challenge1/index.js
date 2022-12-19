const show = document.getElementById('show-all');
const search = document.getElementById('search');
const add = document.getElementById('add');
const remove = document.getElementById('delete');
const table = document.querySelector('.table-data')


// fetch('http://localhost:5050/product')
// .then(response => response.json()).then(data =>{ 
//     table.innerHTML="";
//     data.forEach(element => {
//         let titulo = document.createElement("td");
//         titulo.textContent= element.title;
//         let precio = document.createElement("td");
//         precio.textContent= element.price;
//         let categoria = document.createElement("td");
//         categoria.textContent= element.category;
//         let imagen = document.createElement("td");
//         imagen.textContent= element.img;
        
//         let tableR = document.createElement("tr");
//         tableR.appendChild(titulo);
//         tableR.appendChild(precio);
//         tableR.appendChild(categoria);
//         tableR.appendChild(imagen);
//         table.appendChild(tableR);
//     }
//     )
// })

show.addEventListener("click", () =>{
    fetch('http://localhost:5050/product')
    .then(response => response.json()).then(data =>{ 
        table.innerHTML="";
        data.forEach(element => {
            let titulo = document.createElement("td");
            titulo.textContent= element.title;
            let precio = document.createElement("td");
            precio.textContent= element.price;
            let categoria = document.createElement("td");
            categoria.textContent= element.category;
            let imagen = document.createElement("td");
            imagen.textContent= element.img;
            
            let tableR = document.createElement("tr");
            tableR.appendChild(titulo);
            tableR.appendChild(precio);
            tableR.appendChild(categoria);
            tableR.appendChild(imagen);
            table.appendChild(tableR);
        }
        )
}
)
})

search.addEventListener("click", () =>{
    
})