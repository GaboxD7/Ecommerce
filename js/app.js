
let dato = []; // array que llenaremos desde fetch
let stockProductos = dato; 
let carro = []; // array que llearemos instcanciando la clase carrito
let stock = stockProductos; // stock array el cual utilizaremos para armar nuestro html
let stockColeccion  = []    // 



// Uso de fetch para obtener los producots


const obtenerData = async () => {

    try {
        let response   =    await fetch("./js/datos.json")
 
        let result     =    await response.json()
    
  
        result.productos.forEach((elemento) => {
            dato.push(elemento)
        })
    

    }
    catch(error) {
        console.log(error)
    }

}
obtenerData()

// Obteniendo nodos de DOM

const contenedor = document.querySelector("#contenedor");
const bageContar = document.querySelector("#badgeCount");
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
const coleccion = document.querySelector('.imagen-fondo');
const botonColeccion = document.querySelectorAll('.boton-coleccion');
const contenedorColeccion = document.querySelector('#contenedor-coleccion div')
const contenedorOpen = document.querySelector('#contenedor-coleccion')
const sectionFinal = document.querySelector('#section-final')
const cerrarColeccion = document.querySelector('#cerrar-coleccion')
const titleColeccion = document.querySelector('#title-coleccion')
const imagenColeccion = document.querySelector('#coleccion2022')
const formulario = document.querySelector('#formularioBuscar');

// Obteniendo informacion de LocalStorage
document.addEventListener('DOMContentLoaded', () => {

carro = JSON.parse(localStorage.getItem('carrito')) || [];

   })


// Clase para  crear el el array con la inf del carrito
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

    //  Mostrar todo 
verTodo.forEach(item => item.addEventListener("click", cards))
verTodo.forEach(item => item.addEventListener("click", direccion))
   
    // Mostrar card solo por Genero en HTML
mujer.forEach(item => item.addEventListener("click", cards))
hombre.forEach(item => item.addEventListener("click", cards))
nino.forEach(item => item.addEventListener("click", cards))

    // Cambiar componentes por Genero:
mujer.forEach(item => item.addEventListener("click", cambiarFondo))
hombre.forEach(item => item.addEventListener("click", cambiarFondo))
nino.forEach(item => item.addEventListener("click", cambiarFondo))

     // Rutas de destino
mujer.forEach(item => item.addEventListener("click", direccion2))
hombre.forEach(item => item.addEventListener("click", direccion2))
nino.forEach(item => item.addEventListener("click", direccion2))

     // Ir a inico
inicio.addEventListener("click", volverInicio)

    // Add un producto  desde Contenedor "Agregar Carrito"
contenedor.addEventListener('click', agregarProducto);

     // Add un producto  desde Contenedor de Coleccion "Agregar Carrito"
contenedorColeccion.addEventListener('click', agregarProducto);


    // Buscar filtrando desde input  
formulario.addEventListener('input', filtrar)

    // Ruta en el boton search type= submit 

sub.onclick = function(e) {
    e.preventDefault();
  //   window.location.href = "https://gaboxd7.github.io/Ecommerce/index.html#submit-search";
    window.location.href = " http://127.0.0.1:5500/index.html#submit-search";
   
}
    //  add boton verColeccion
coleccion.addEventListener("mousemove", (e) => {

    botonColeccion[0].classList.remove("boton-coleccion")

})
    // Quitar boton VerColeccion
coleccion.addEventListener("mouseout", (e) => {

    botonColeccion[0].classList.add("boton-coleccion")
  
 
})
    // Mostrar Coleccion 2022 desde boton
botonColeccion[0].addEventListener("click", mostrarColeccion )

    // Mostrar Coleccion desde titulo

titleColeccion.addEventListener("click", mostrarColeccion )

    // Cerrar Contenedor Coleccion
cerrarColeccion.addEventListener("click", () => {
    // window.location.href = "https://gaboxd7.github.io/Ecommerce/index.html#section-medio"
    window.location.href = "http://127.0.0.1:5500/index.html#section-medio"
  
    contenedorOpen.classList.add('open');
    sectionFinal.style.marginBottom= "20rem";
    titleColeccion.classList.remove('title-down')
    titleColeccion.classList.add('title-up')
    imagenColeccion.style.alignSelf = "auto"

})

}


function direccion  ()  {
     
    // window.location.href = "https://gaboxd7.github.io/Ecommerce/index.html#section-medio";
    window.location.href = "http://127.0.0.1:5500/index.html#section-medio";
} 
function direccion2  (e)  {

    // window.location.href = "https://gaboxd7.github.io/Ecommerce/index.html#h1";
    window.location.href = "http://127.0.0.1:5500/index.html#h1";
    
}
 
    // Filtrando el texto ingresado por medio del input
function filtrar  ()  {

contenedor.innerHTML = "";
    const texto = formulario.value.toLowerCase();
        for(let prod of stock) {
            let nombre = prod.nombre.toLowerCase();
            if (nombre.indexOf(texto.split()) !== -1) {
                const div = document.createElement("div");
             
                div.className = "col-3 mb-3";

                div.innerHTML = `
                <div class="m-3 card-cuerpo" >
                <div>
                <span class="card-texto">${prod.deporte} </span>
                    <a href=#!><img src=${prod.img} class="card-img-top img-size  "   alt="..."></a>
                </div>
                <div class="precio">
                    <h6>${prod.nombre}</h6>
                    <span>Precio: $<span>${prod.precio} </span></span>
                    
                  
                </div>
                <ul class="list-group list-group-flush d.flex">
                    <li class="card-lista">Genero:  ${prod.genero} || Talla: ${prod.talla}</li>
                          
                    <li class="card-lista "> 
             
                    <div class="select">
                    <select id="cantidad${prod.id}" name"unidades">
                    <option value=1>1</option>
                    <option value=2>2</option>
                    <option value=3>3</option>
                    <option value=4>4</option>
                 </select></div>
                  </li>              
                    </ul>
                <button class="card-btnn add-carro" id="${prod.id}" data-id="${prod.id}" type="button">AGREGAR AL CARRITO</button>
            </div>`;
contenedor.appendChild(div);
            }
        } 
      
        if(contenedor.innerHTML === "" ) {
            contenedor.innerHTML = `
                <h4 class="text-center"> <i class="fi fi-rr-surprise"></i> ¡Vaya! No hemos encontrado resultados de: <span class="no-encontrado bg-light">${texto}</span></h4>
            `
        }


 }



 
   // Funcion para volver al Inicio

function volverInicio () {
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
        // Funtion para cambiar el html
function cards(e) {
  
    if (e.target.className == verTodo[0].className  ) {

        contenedor.innerHTML = '';
       
        jumbo.style.backgroundImage = "url(img/jumbo/pesa-rusa.jpg)";
        jumbo.style.height = "100vh";
        btnProd.style.display  = "block";
        h1.textContent = "Somos Tienda Deportiva Online"
        h1.style.fontSize= "3rem"
        h1.style.alignSelf= "center"
        titulo.textContent = "DESCUBRE LA FUERZA DENTRO DE TI"
     
        stock = stockProductos

    } else  {
        const exis = stock.some(prod => e.target.className !== prod.genero)

        if (exis) {
       
            contenedor.innerHTML = '';
          stock = stockProductos.filter(elem => elem.genero ==  e.target.className || elem.genero == e.target.classList.item(2))
          titulo.textContent = "DESCUBRE LA FUERZA DENTRO DE TI"
        }
     

    } 
 
mostrarCard() // llamamos a la funcion para mostrar las Cards 


}

        // Boton RUNNING-CROSFFIT-RUNNING: Usando jquery

$(document).ready(function() {

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


function cambiarFondo (e) {
 
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

    // Mostrando cards 

function mostrarCard () {

contenedor.innerHTML = '';
    stock.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "col-3 mb-3";
        div.innerHTML = `
                            <div class="m-3 card-cuerpo mt-5" >
                                <div>
                                <span class="card-texto">${prod.deporte} </span>
                                    <a href=#!><img src=${prod.img} class="card-img-top img-size  "   alt="..."></a>
                                </div>
                                <div class="precio">
                                    <h6 class="bg-light">${prod.nombre}</h6>
                                    <span>Precio: $<span>${prod.precio} </span></span>
                                    
                                  
                                </div>
                                <ul class="list-group list-group-flush d.flex">
                                    <li class="card-lista">Genero:  ${prod.genero} || Talla: ${prod.talla}</li>
                                          
                                    <li class="card-lista "> 
                             
                                    <div class="select">
                                    <select id="cantidad${prod.id}" name"unidades">
                                    <option value=1>1</option>
                                    <option value=2>2</option>
                                    <option value=3>3</option>
                                    <option value=4>4</option>
                                 </select></div>
                                  </li>              
                                    </ul>
                                <button class="card-btnn add-carro" id="${prod.id}" data-id="${prod.id}" type="button">AGREGAR AL CARRITO</button>
                            </div>`;
        contenedor.appendChild(div);
    });
}


  // Funcion para add productos al Carrito

function agregarProducto(e) {

    e.preventDefault();

    if (e.target.classList.contains('add-carro')) {
       const productoSeleccionado = e.target.parentElement;
    
       leerDatosProducto(productoSeleccionado) // Llamada a la funcion donde obtendremos los datos del producto seleccionado

   }

    
}
// Funcion que nos permite obtener la informacion del prodcuto

function leerDatosProducto(producto) {

    const id = producto.querySelector('button').getAttribute('data-id');
    const imagen = producto.querySelector('img').src;
    const nombre = producto.querySelector('h6').textContent;
    const precio = producto.querySelector('.precio span span').textContent;
    let cantidad = parseInt(document.getElementById(`cantidad${id}`).value);
    // const deporte = producto.querySelector('')
console.log(id)
console.log(imagen)
console.log(nombre)
console.log(precio)
console.log(cantidad)
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

   
        addCarroStorage()           // agregamos al LS
        mostrarNumeroCarrito()      // Mostramo el lenght del array carrito
        Toastify({                  // Mensaje Alert por toastify
            text: `Haz agregado un producto`,
            duration: 4000,
            //  destination: "https://gaboxd7.github.io/Ecommerce/carro.html",
             destination: "http://127.0.0.1:5500/carro.html",
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

  
   // Mostramo el lenght del array carrito

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


// SECTION COLECCION 






// Funcion que realiza cambio en la seccion coleccion 2022 
function  mostrarColeccion () {
    // window.location.href = "https://gaboxd7.github.io/Ecommerce/index.html#coleccion2022";
    window.location.href = " http://127.0.0.1:5500/index.html#coleccion2022";
    sectionFinal.style.marginBottom= "0"
    contenedorColeccion.style.marginBottom ="5rem";
    titleColeccion.classList.add('title-down')
    titleColeccion.classList.remove('title-up')
    imagenColeccion.style.alignSelf = "end"
 
     filtrarStockColeccion() // se llama a la funcion que editara nuestro stock con los productos coleccion 2022
 
    contenedorOpen.classList.remove('open') // Quitamos la clases open para mostrar el contendor
 }

 // Filtramo nuestros Prodcutos por coleccion año 2022 
 function filtrarStockColeccion () {
    stockColeccion = stockProductos.filter(prod => prod.anio == 2022)

    mostrarCardColeccion()  // llamada para redenrizar
}

    // Renderizamos el stockColeccion 
function mostrarCardColeccion ()  {
  
 contenedorColeccion.innerHTML = '';
    stockColeccion.forEach((prod) => {
        const div = document.createElement("div");
     
        // div.className = "col-2 mb-3";
        div.innerHTML += `
        <div class="m-3 card-cuerpo" >
        <div>
        <span class="card-texto">${prod.deporte} </span>
            <a href=#!><img src=${prod.img} class="card-img-top img-size  "   alt="..."></a>
        </div>
        <div class="precio">
            <h6>${prod.nombre}</h6>
            <span>Precio: $<span>${prod.precio} </span></span>
            
          
        </div>
        <ul class="list-group list-group-flush d.flex">
            <li class="card-lista">Genero:  ${prod.genero} || Talla: ${prod.talla}</li>
                  
            <li class="card-lista "> 
     
            <div class="select">
            <select id="cantidad${prod.id}" name"unidades">
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
         </select></div>
          </li>              
            </ul>
        <button class="card-btnn add-carro" id="${prod.id}" data-id="${prod.id}" type="button">AGREGAR AL CARRITO</button>
    </div>`;
        contenedorColeccion.appendChild(div);
    });
}
const check = document.querySelector("#check");
const email = document.querySelector("#email");
const registrar = document.querySelector("#registrar");
console.log(check.checked)
console.log(email)
console.log(registrar)
registrar.addEventListener("click", (e) => {
     e.preventDefault();
if (!check.checked) {
    alert("Debes aceptar los terminos y condiciones")
} else {
   validarEmail()
}
// alert(`${email.textContent}`)
console.log(email.value)

})

const validarEmail = () => {
    const expreRegular = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const esValido = expreRegular.test(email.value)
    if (esValido == true) {
        alert(`Exclente ${email.value} te haz subscrito correctamente`)
    } else {
alert("ingrese un correo vlido")
    }
}

