import { stockProductos } from "./stock.js";
// import { carrito }  from "./carro.js";

// FIN DE PRODUCTOS

let carro = [];
// let producto = {};



const contenedor = document.querySelector("#contenedor");
let carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const  bageContar = document.querySelector("#badgeCount");



class Carrito {

    constructor(id, nombre, precio, img, cantidad ) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = img;
        this.cantidad = cantidad;
        this.subtotal = 0;
    }

}


function cards() {
    stockProductos.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "col-3 mb-3";
        div.innerHTML = `
                            <div class="card " >
                                <div>
                                    <a href=#! id="enlaceModal${prod.id}"><img src=${prod.img} class="card-img-top img-size  "   alt="..."></a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${prod.nombre}</h5>
                                    <p class="card-text">${prod.desc}.</p>
                                </div>
                                <ul class="list-group list-group-flush d.flex">
                                    <li class="list-group-item">Genero:  ${prod.genero}</li>
                                    <li class="list-group-item">Talla: ${prod.talla}</li>
                                    <li class="list-group-item precio">Precio: $<span>${prod.precio} </span></li>
            
                                  
                                </ul>
                                <span>Cantidad:</span>
                                <select id="cantidad${prod.id}" name"unidades">
                                    <option value=1>1</option>
                                    <option value=2>2</option>
                                    <option value=3>3</option>
                                    <option value=4>4</option>
                                 </select>
                             
                                <button class="card-btnn add-carro" id="${prod.id}" data-id="${prod.id}" type="button">AGREGAR AL CARRITO</button>
                            </div>`;
        contenedor.appendChild(div);
    });
}
cargarEventos()
// Cargar Eventos 
function cargarEventos() {

    // Add un producto "Agregar Carrito"
    contenedor.addEventListener('click', agregarProducto);

    // Eliminar
    carrito.addEventListener('click', eliminarProducto);
    // bageContar.addEventListener('click', mostrar )


    // Muestra los productos de Local Storage
    document.addEventListener('DOMContentLoaded', () => {
         carro = JSON.parse(localStorage.getItem('carrito')) || [];
    
            limpiarHTML();
        })
    
        // Vaciar el carrito
    vaciarCarrito.addEventListener('click', () => {
    
         carro = []; // reseteamos el arreglo
         localStorage.removeItem('carrito');
        
         bageContar.innerHTML = '';
         limpiarHTML(); // Eliminamos todo el  HTML
        });
}



//  Agregar Producto

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('add-carro')) {
       const productoSeleccionado = e.target.parentElement;
    
       leerDatosProducto(productoSeleccionado)

   }

    
}


function eliminarProducto (e) {
    e.preventDefault();

    console.log(e.target.classList.contains('borrar-producto'))
    if(e.target.classList.contains('borrar-producto')) {
  
        const productoId = e.target.parentElement.getAttribute('data-id');
            // Elimina del arreglo de articulosCarrito por el data-id
            carro = carro.filter(producto => producto.id !== productoId);
            mostrarCarroHtml()
            
    }
    if (carro.length == 0 ){
        bageContar.innerHTML = '';
    }

    
}

function leerDatosProducto(producto) {
    const id = producto.querySelector('button').getAttribute('data-id');
    const imagen = producto.querySelector('img').src;
    const nombre = producto.querySelector('h5').textContent;
    const precio = producto.querySelector('ul  .precio span').textContent;
    let cantidad = parseInt(document.getElementById(`cantidad${id}`).value);


   // Creo el nuevo producto
    const productoCarro = new Carrito(id, nombre, precio, imagen, cantidad )

    productoCarro.subtotal = Number(productoCarro.precio*productoCarro.cantidad);

    // console.log(productoCarro)

   const existe = carro.some(prod => prod.id == productoCarro.id);

    // console.log(carro)
    if(existe) {
                // Actualizamos la cantidad
                const productos = carro.map(producto =>  {
                    if (producto.id === productoCarro.id) {
                        producto.cantidad = cantidad + producto.cantidad;
                        producto.subtotal = Number(producto.precio*producto.cantidad)
                        return producto // retorna objeto actualizado
                    }else {
                        return producto; // retorna los objetos que no son los duplicados
                    }
                })
          
                carro = [];

                for (let i = 0; i < productos.length; i++) {
                      carro.push(productos[i]);
                
                }

            } else {
        
                       carro.push(productoCarro);    
            }

      
  
 mostrarCarroHtml()

}


// Mostrar Carro html

 const mostrarCarroHtml = () => {

   limpiarHTML()
  
  // Muestro en el html del carro
    contenedorCarrito.innerHTML = "";
  
    carro.forEach((prod) => {
    const {imagen, nombre, precio, cantidad, subtotal, id} = prod;
          const tr = document.createElement("tr"); 

       tr.innerHTML = ` 
     <tr>
        <td><img src="${imagen}" height=40px class="w-100"</td>
        <th scope="row" class="text-center">${cantidad}</th>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${subtotal}</td>
        <td>
            <a href="#" class="borrar-producto text-center" data-id="${id}"> <img src="img/basura.png" class="img-trash  borrar-producto" > </a>
        </td>
     </tr>
     


           `;
  // add el html del carro en el tbody
       contenedorCarrito.appendChild(tr);
     });

    // Agregar el carrito de compras al storage
     bageContar.className = "balge"
     bageContar.innerHTML = carro.length;

     addCarroStorage()
   }


   
   // funcion para agreagr carro al estorage
function addCarroStorage () {
    localStorage.setItem('carrito', JSON.stringify(carro));
}



function limpiarHTML() {
    // limpiar nuestro HTML

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    total.innerHTML = `Total : $${totalGeneral()}`;
}



function totalGeneral() {
    let productoTotal = carro.reduce((total, producto) => total + producto.subtotal, 0);

    return productoTotal;
}
cards();
