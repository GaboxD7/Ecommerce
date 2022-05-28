
   /*       RUTAS DE ALGUNOS BOTONES CONFIGURADAS CON: "WINDOW.LOCATION*.
            Si estas de manera local debes descomentar las rutas 
                LOCAL  y  comentar las rutas GIT-PAGE/                  */  

     //---------------------Ruta en el boton SEGUIR COMPRANDO--------------------------------------

     const btnSeguirComprando = "http://127.0.0.1:5500/index.html#section-medio";                                        // LOCAL
 //  const btnSeguirComprando = "https://gaboxd7.github.io/Ecommerce/index.html#section-medio";                         // GIT-PAGE

 
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carro-in');
const carritoVacio = document.querySelector('#carro-vacio');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const contenedorCar = document.querySelector("#conteCarro");
const pagar = document.querySelector("#pagar");
let seguirCompra = document.getElementsByClassName("seguir-comprando");

const descuento = document.querySelector('#descuento');
const inputDescuento = document.querySelector('#input-descuento');
const containerDescuento = document.querySelector('#container-descuento');
const inputCodigo = document.querySelector('#input-codigo');
const submitCodigo = document.querySelector('#ok-codigo');
const tdPrecio = document.querySelector('#td-precio');
let validarDcto = JSON.parse( localStorage.getItem('aceptado')) || false;

 // Obtener el carrito de LocalStorage
let articulosCarro = JSON.parse( localStorage.getItem('carrito')) || [];

// Cargas Eventos que estan dentro de la funcion cargarEventos
cargarEventos()

function cargarEventos () {
   // Eliminar Producto
    carrito.addEventListener('click', eliminarProducto);

    // Vaciar Carrito

    vaciarCarrito.addEventListener('click', () => {

      VaciarCarro();
    });
    // Realizar la compra boton "pagar"

    pagar.addEventListener('click', pagado);

    // Validar codigo  

    inputCodigo.addEventListener('input', validarCodigo);
    seguirCompra[0].addEventListener('click', seguirComprando);
    seguirCompra[1].addEventListener('click', seguirComprando);

}

mostrarCarroHtml()

function mostrarCarroHtml()  {
 
  mostrarTotales()

      contenedorCar.innerHTML = "";
   
     articulosCarro.forEach((prod) => {
     const {imagen, nombre, precio, cantidad, subtotal, id} = prod;
           const tr = document.createElement("tr"); 
 
        tr.innerHTML += ` 
      <tr>
         <td class="padre-img"><img class="hijo-img img-carro" src="${imagen}"</td>
         <td class="padre-img"><div class="hijo-img"> ${cantidad}</div></td>
         <td class="padre-img"><div class="hijo-img"> ${nombre}</div></td>
       
         <td class="padre-img"><div class="hijo-img">$ ${subtotal}</div></td>
 
         <td class="padre-img">
             <a href="#" class="borrar-producto hijo-img " data-id="${id}"> <img src="img/basura.png" class="img-trash  borrar-producto" > </a>
         </td>
      </tr>`;
 
   // add el html del carro en el tbody
        contenedorCar.appendChild(tr);
    
      });

    }

 // Funcial al pagar

    function pagado() {
  
      Toastify({
        text: `GRACIAS POR TU COMPRA`,
        duration: 3000,
        newWindow: true,
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            padding: "10rem",
          background: "black",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      VaciarCarro();

    }

// Funcion al vaciar Carrito

const VaciarCarro = () => {
  articulosCarro = []; // reseteamos el arreglo
  localStorage.removeItem('carrito');
  localStorage.removeItem('aceptado');
  contenedorCar.innerHTML = '';
  mostrarTotales()
  carritoVacio.classList.remove("d-none")
  carrito.classList.add("d-none")
}



function seguirComprando () {
    window.location.href = btnSeguirComprando;
}


    
    // Eliminar Producto de carrito
  
    function eliminarProducto (e) {
  
      if(e.target.classList.contains('borrar-producto')) {
    
          const productoId = e.target.parentElement.getAttribute('data-id');
 
            articulosCarro = articulosCarro.filter(producto => producto.id !== productoId);
            localStorage.setItem("carrito", JSON.stringify(articulosCarro))
            mostrarCarroHtml()
         
     
              VerificarVacio()
      
        
            
      }
     
  }

  function mostrarTotales() {

      total.innerHTML = `$ ${totalGeneral()}`;
      total2.innerHTML = `$ ${validarDcto ? totalGeneral() *0.90 :  totalGeneral()}`;
}

function totalGeneral() {

    let productoTotal = articulosCarro.reduce((total, producto) => total + producto.subtotal, 0);

    return productoTotal ;
}

function VerificarVacio () {
  if (articulosCarro.length == 0 ) {

    carritoVacio.classList.remove("d-none")
    carrito.classList.add("d-none")
  } else {
  
    carrito.classList.remove("d-none")
    carritoVacio.classList.add("d-none")
  
  }
}

VerificarVacio();




submitCodigo.addEventListener('click', aplicarOk);
function aplicarOk () {
  inputDescuento.classList.add('d-none')
  containerDescuento.classList.add('d-block')
  containerDescuento.classList.remove('d-none')

}

descuento.addEventListener('click', (e) => {

  inputDescuento.classList.remove('d-none')
  containerDescuento.classList.remove('d-block')
  containerDescuento.classList.add('d-none')


});


// Validacion del codigo descuento "RESUMEN DE COMPRA"

function validarCodigo ()  {

  const texto = inputCodigo.value.toLowerCase().split(' ');

  validarDcto = (texto.join('') == "gabosport" )
  if (texto !== '') {
  
    if(validarDcto) {

      localStorage.setItem('aceptado', JSON.stringify(validarDcto));
      mostrarTotales();

      Swal.fire({
        title: `TU CODIGO FUE ACEPTADO CON 10% EN TU COMPRA`,
        icon: 'success',
        iconColor:'black',
        grow: 'row',
      //   with: "30px",
        padding:'3rem',
        confirmButtonText: 'ENTENDIDO',
        confirmButtonColor: '#111',
        showCancelButton: false,
        showCloseButton: true,

      })
      tdPrecio.classList.add('total-precio-cambio')
    } 

  } 

}

// funcion para agregar clase al precio TOTAL
const getTdPrecio = () => {
  if(validarDcto) {
    tdPrecio.classList.add('total-precio-cambio');
  }
 }
 getTdPrecio()