import { stockProductos } from "./stock.js";

let stock = stockProductos;
let carro = [];

// let producto = {};

const contenedor = document.querySelector("#contenedor");
let carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const  bageContar = document.querySelector("#badgeCount");
 const mujer = document.querySelectorAll(".Mujer");
 const hombre = document.querySelectorAll(".Hombre");
 const nino = document.querySelectorAll(".nino");
 const jumbo = document.querySelector("#jumbo");
// let mujer = document.getElementsByClassName("Mujer")
// const hombre = document.querySelector('#Hombre');
const verTodo = document.querySelectorAll('.vertodo');
// const nino = document.querySelector('#nino');

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

cargarEventos()
// Cargar Eventos 
function cargarEventos() {
// 

mujer.forEach(item => item.addEventListener("click", cards))
mujer.forEach(item => item.addEventListener("click", fondo))
hombre.forEach(item => item.addEventListener("click", cards))
nino.forEach(item => item.addEventListener("click", cards))
verTodo.forEach(item => item.addEventListener("click", cards))
// addEventListener('click', cards)
// hombre.addEventListener('click', cards)
// verTodo.addEventListener('click', cards)
// nino.addEventListener('click', cards)
    // Add un producto "Agregar Carrito"
    contenedor.addEventListener('click', agregarProducto);

    // Eliminar
    carrito.addEventListener('click', eliminarProducto);
   
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


function cards(e) {
  
   
  
    console.log(e.target.className)
    console.log(verTodo[0].className)
    if (e.target.className == verTodo[0].className  ) {
        // console.log(e.target);
        // console.log(verTodo)
        contenedor.innerHTML = '';
        // limpiarContenedorHTML();
    
        stock = stockProductos

 
    } else  {
        const exis = stock.some(prod => e.target.className !== prod.genero)
        // console.log(e.target.className)
        // console.log(stock)
        // console.log(exis)
        // console.log(prod)
        if (exis) {
            // limpiarContenedorHTML();
            contenedor.innerHTML = '';
            stock = stockProductos.filter(elem => elem.genero ==  e.target.className || elem.genero == e.target.classList.item(2))
        }
     
    //  console.log(stock)
    } 
mostrarCard(stock)


}
function fondo () {
    if (mujer[0].classList.contains("Mujer")) {
        console.log("hola")
        jumbo.classList.replace("jumbo", "jumbo-mujer")
        console.log( mujer[0].classList)
    }

}



function mostrarCard (stock) {


    stock.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "col-3 mb-3";
        div.innerHTML = `
                            <div class="card " >
                                <div>
                                    <a href=#! id="enlaceModal${prod.id}"><img src=${prod.img} class="card-img-top img-size  "   alt="..."></a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${prod.nombre}</h5>
                                    <p class="card-text">${prod.desc}</p>
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

    const productoCarro = new Carrito(id, nombre, precio, imagen, cantidad );

    productoCarro.subtotal = Number(productoCarro.precio*productoCarro.cantidad);

    const existe = carro.some(prod => prod.id == productoCarro.id);

  
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
     <tr class="p-4">
        <td><img src="${imagen}" height=65px class="w-100"</td>
        <th scope="row" class="text-center">${cantidad}</th>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${subtotal}</td>
        <td>
            <a href="#" class="borrar-producto text-center" data-id="${id}"> <img src="img/basura.png" class="img-trash  borrar-producto" > </a>
        </td>
     </tr>`;
  // add el html del carro en el tbody
       contenedorCarrito.appendChild(tr);
     });

    // Agregar el carrito de compras al storage

 
     addCarroStorage()
     mostrarNumeroCarrito()
   }

   mostrarNumeroCarrito()
   //
   function mostrarNumeroCarrito () {
 
   if (localStorage.getItem("carrito")) {
    let karro = JSON.parse(localStorage.getItem('carrito'));
    bageContar.className = "balge"
    bageContar.innerHTML = karro.length;
     
   } else {
       

   bageContar.innerHTML = "";
    
   }
  


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
window.addEventListener('click', (e) => {

    e.preventDefault()
})
// cards();
