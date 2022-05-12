// import { mostrarCarroHtml } from "./carro.js";
import { stockProductos } from "./stock.js";



let carro = [];
let stock = stockProductos;



// let producto = {};

const contenedor = document.querySelector("#contenedor");

// const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const  bageContar = document.querySelector("#badgeCount");
const mujer = document.querySelectorAll(".Mujer");
const hombre = document.querySelectorAll(".Hombre");
const nino = document.querySelectorAll(".nino");
const jumbo = document.querySelector(".jumbo");
const btnProd = document.querySelector("#btn-prod");
const inicio = document.querySelector("#inicio")
const h1 = document.querySelector("#h1");
const verTodo = document.querySelectorAll('.vertodo');
const sub = document.querySelector('#submit-search');
const titulo = document.querySelector('#titulo');
const coleccion = document.querySelector('#coleccion');
const botonColeccion = document.querySelectorAll('.boton-coleccion');
console.log(coleccion);
console.log(botonColeccion[0])


const formulario = document.querySelector('#formularioBuscar');
const resultado = document.querySelector('#resultados');

document.addEventListener('DOMContentLoaded', () => {
    carro = JSON.parse(localStorage.getItem('carrito')) || [];


   })

coleccion.addEventListener("mousemove", (e) => {
    console.log(e.target)
    console.log(coleccion)
    if ( e.target == coleccion) {
        console.log("hola des si")
        botonColeccion[0].style.display = "block"
        coleccion.style.opacity = "0.2"
    } else {
        botonColeccion[0].style.display = "none"
        coleccion.style.opacity = "1"
        console.log("hola des NO")
    }
    
})

coleccion.addEventListener("mouseout", (e) => {

  
        botonColeccion[0].style.display = "none"
        coleccion.style.opacity = "1"
        console.log("hola des NO")
    
    
})

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
 console.log(window.location.href)

cargarEventos()
// Cargar Eventos 
function cargarEventos() {

mujer.forEach(item => item.addEventListener("click", cards))
mujer.forEach(item => item.addEventListener("click", fondo))
mujer.forEach(item => item.addEventListener("click", direccion2))
hombre.forEach(item => item.addEventListener("click", cards))
hombre.forEach(item => item.addEventListener("click", fondo))
hombre.forEach(item => item.addEventListener("click", direccion2))
nino.forEach(item => item.addEventListener("click", cards))
nino.forEach(item => item.addEventListener("click", fondo))
nino.forEach(item => item.addEventListener("click", direccion2))
verTodo.forEach(item => item.addEventListener("click", cards))
verTodo.forEach(item => item.addEventListener("click", direccion))
inicio.addEventListener("click", volver)

    // Add un producto "Agregar Carrito"

contenedor.addEventListener('click', agregarProducto);


// formulaio Buscar 

}

function direccion  ()  {
    window.location.href = "http://127.0.0.1:5502/index.html#section-medio";

} 
function direccion2  (e)  {
    // e.preventDefault()
    window.location.href = "http://127.0.0.1:5502/index.html#h1";

}

const filtrar = () => {
    //  console.log(formulario.value)
contenedor.innerHTML = "";
    const texto = formulario.value.toLowerCase();
        for(let prod of stock) {
            let nombre = prod.nombre.toLowerCase();
            if (nombre.indexOf(texto) !== -1) {
                const div = document.createElement("div");
             
                div.className = "col-3 mb-3";

                div.innerHTML = `
                <div class="card " >
                    <div>
                        <a href=#! id="enlaceModal${prod.id}"><img src=${prod.img} class="card-img-top img-size  "   alt="..."></a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text h6">${prod.deporte}</p>
                    </div>
                    <ul class="list-group list-group-flush d.flex">
                        <li class="list-group-item">Genero:  ${prod.genero}</li>
                        <li class="list-group-item">Talla: ${prod.talla}</li>
                        <li class="list-group-item precio">Precio: $<span>${prod.precio} </span></li>              
                        <li class="list-group-item precio"> <span>Cantidad:</span>
                        <select id="cantidad${prod.id}" name"unidades">
                            <option value=1>1</option>
                            <option value=2>2</option>
                            <option value=3>3</option>
                            <option value=4>4</option>
                         </select></li>              
                        </ul>
                    <button class="card-btnn add-carro" id="${prod.id}" data-id="${prod.id}" type="button">AGREGAR AL CARRITO</button>
                </div>`;

                contenedor.appendChild(div);
            }
        } 

        if(contenedor.innerHTML === "" ) {
            contenedor.innerHTML = `
                <h1 class="text-center">Producto no encontrado...</h1>
            `
        }


 }



 formulario.addEventListener('input', filtrar)

     sub.onclick = function(e) {
             e.preventDefault();
             window.location.href = "http://127.0.0.1:5502/index.html#submit-search";
     }
console.log(carro)
function volver () {
    contenedor.innerHTML = '';
    jumbo.style.backgroundImage = "url(img/jumbo/pesa-rusa.jpg)";
    jumbo.style.height = "100vh";
    stock = stockProductos
    btnProd.style.display  = "block";
    h1.textContent = "Somos Tienda Deportiva Online"
    h1.style.fontSize= "3rem"
    h1.style.alignSelf= "center"
    titulo.textContent = "DESCUBRE LA FUERZA DENTRO DE TI"
}

function cards(e) {
  
    if (e.target.className == verTodo[0].className  ) {

        contenedor.innerHTML = '';
        // limpiarContenedorHTML();
        jumbo.style.backgroundImage = "url(img/jumbo/pesa-rusa.jpg)";
        jumbo.style.height = "100vh";
        btnProd.style.display  = "block";
        h1.textContent = "Somos Tienda Deportiva Online"
        h1.style.fontSize= "3rem"
        h1.style.alignSelf= "center"
        titulo.textContent = "DESCUBRE LA FUERZA DENTRO DE TI"
        // e.target.className == verTodo[0].className?  stock = stockProductos : stock = stock
        stock = stockProductos

    } else  {
        const exis = stock.some(prod => e.target.className !== prod.genero)

        if (exis) {
            // limpiarContenedorHTML();
            contenedor.innerHTML = '';
          stock = stockProductos.filter(elem => elem.genero ==  e.target.className || elem.genero == e.target.classList.item(2))
          titulo.textContent = "DESCUBRE LA FUERZA DENTRO DE TI"
        }
     

    } 
 
mostrarCard()


}


// Boton RUNNING 


$(document).ready(function() {
// $("Crossfit").click(function(){

//     window.document.href = "http://127.0.0.1:5502/index.html#section-medio"
// })
$("#crossfit").click(function(e){
    e.preventDefault()
   stock.forEach(prod =>  {
       if(prod.deporte == "Crossfit")  {
      stock = stock.filter(prod => prod.deporte == "Crossfit")
       }
   })
   titulo.textContent = "Crosffit"
        mostrarCard()
        direccion()
    })


$("#running").click(function(e){
    e.preventDefault()
    stock.forEach(prod =>  {
        if(prod.deporte == "Running")  {
           stock = stock.filter(prod => prod.deporte == "Running")
            }
        })
        titulo.textContent = "Running"
             mostrarCard()
             direccion()
        
      })



$("#training").click(function(e){
    e.preventDefault()
     stock.forEach(prod =>  {
        if(prod.deporte == "Training")  {
             stock = stock.filter(prod => prod.deporte == "Training")
                }
            })
            titulo.textContent = "Trainning"
                 mostrarCard()
                 direccion()
          })
        })

function fondo (e) {
    console.log();
    if (e.target.classList.contains("Mujer")) {
        jumbo.style.backgroundImage = "url(img/jumbo/jumbo-m2.jpg)";
        jumbo.style.height = "60vh";
          btnProd.style.display  = "none";
          h1.textContent = "PARA LA MUJER QUE JAMAS SE RINDE"
          h1.style.fontSize= "3rem"
          h1.style.alignSelf= "flex-start"

    }  else if (e.target.classList.contains("Hombre")) {
        jumbo.style.backgroundImage = "url(img/jumbo/jumbo-h1.jpg)";
        jumbo.style.height = "60vh";
        btnProd.style.display  = "none";
        h1.textContent = "TENEMOS TODO PARA QUE NO TE DETENGAS"
        h1.style.fontSize= "3rem"
        h1.style.alignSelf= "flex-start"
    
    } else {
        jumbo.style.backgroundImage = "url(img/jumbo/jumbo-n1.avif)";
        jumbo.style.height = "60vh";
        btnProd.style.display  = "none";
        h1.textContent = "NUESTROS NIÑOS MERECEN LO MEJOR"
        h1.style.fontSize= "3rem"
        h1.style.alignSelf= "flex-start"
 
    }
}



function mostrarCard () {
console.log(stock)
contenedor.innerHTML = '';
    stock.forEach((prod) => {
        const div = document.createElement("div");
        console.log(prod.precio)
        div.className = "col-3 mb-3";
        div.innerHTML = `
                            <div class="card m-3" >
                                <div>
                                <p class="card-text h6">${prod.deporte} </p>
                                    <a href=#!><img src=${prod.img} class="card-img-top img-size  "   alt="..."></a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${prod.nombre}</h5>
                                  Precio: $<span>${prod.precio} </span>
                                </div>
                                <ul class="list-group list-group-flush d.flex">
                                    <li class="list-group-item text-center">Genero:  ${prod.genero} | Talla: ${prod.talla}</li>
                                          
                                    <li class="list-group-item precio "> <span>Cantidad:</span>
                                    <select id="cantidad${prod.id}" name"unidades">
                                        <option value=1>1</option>
                                        <option value=2>2</option>
                                        <option value=3>3</option>
                                        <option value=4>4</option>
                                     </select></li>              
                                    </ul>
                                <button class="card-btnn add-carro" id="${prod.id}" data-id="${prod.id}" type="button">AGREGAR AL CARRITO</button>
                            </div>`;
        contenedor.appendChild(div);
    });
}


// Section lo mas vendido

// mostraSection()
// function mostraSection ()  {

//     const div2 = document.createElement("div")
//     let sectionVendido = stock.slice(8, 10)
//     sectionVendido.forEach((prod) => {
//        div2.className = "vendido"
//         div2.innerHTML += `
//         <div>
//         <h5 class="card-title text-center pb-3 ">${prod.nombre}</h5>
//         <img src=${prod.img} alt="">
     
//         <button class="card-btnn add-carro text-center" id="${prod.id}" data-id="${prod.id}" type="button">AGREGAR AL CARRITO</button>
       
//         <ul clas="ul-vendido" id="h">
//         <li>Genero:  ${prod.genero}</li>
//         <li>Talla: ${prod.talla}</li>
//         <li class="precio">Precio: $<span>${prod.precio} </span></li>              
//         <li> <span>Cantidad:</span>
//         <select id="cantidad${prod.id}" name"unidades">
//             <option value=1>1</option>
//             <option value=2>2</option>
//             <option value=3>3</option>
//             <option value=4>4</option>
//          </select></li>              
//         </ul>
//         </div>
        
//         ` })

//     masVendido.appendChild(div2);

// }

//  Agregar Producto

function agregarProducto(e) {

    e.preventDefault();

    if (e.target.classList.contains('add-carro')) {
       const productoSeleccionado = e.target.parentElement;
    
       leerDatosProducto(productoSeleccionado)

   }

    
}


function leerDatosProducto(producto) {
console.log(producto)
    const id = producto.querySelector('button').getAttribute('data-id');
    const imagen = producto.querySelector('img').src;
    const nombre = producto.querySelector('h5').textContent;
    const precio = producto.querySelector('div span').textContent;
    console.log(precio)
    let cantidad = parseInt(document.getElementById(`cantidad${id}`).value);
    // const deporte = producto.querySelector('')

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

   
        addCarroStorage()
        mostrarNumeroCarrito()
        Toastify({
            text: `Haz agregado un producto`,
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            // close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                padding: "2rem",
              background: "black",
            },
            onClick: function(){} // Callback after click
          }).showToast();

}

  


   mostrarNumeroCarrito()
   //
   function mostrarNumeroCarrito () {


    let karro = JSON.parse(localStorage.getItem('carrito')) || [];

    if ( karro.length == []) {
    
        bageContar.innerHTML = "";
    } else {
     
        bageContar.className = "balge"
        bageContar.innerHTML = karro.length;
   }
  


   }


function addCarroStorage () {

    localStorage.setItem('carrito', JSON.stringify(carro));

}


