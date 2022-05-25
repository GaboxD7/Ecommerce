//  import { limpiarHTML} from "./app.js";

let articulosCarro = JSON.parse( localStorage.getItem('carrito')) || [];
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carro-in');
const carritoVacio = document.querySelector('#carro-vacio');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const contenedorCar = document.querySelector("#conteCarro");
const pagar = document.querySelector("#pagar");
const seguirComprando = document.querySelector("#seguir-comprando")
const seguirComprando2 = document.querySelector("#seguir-comprando2")
let validarDcto = JSON.parse( localStorage.getItem('aceptado')) || false;
// let validarDcto = false;


mostrarCarroHtml()

function mostrarCarroHtml()  {
 
  limpiarHTML()

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

    cargarEventos()

    function cargarEventos () {
       // Eliminar Producto
        carrito.addEventListener('click', eliminarProducto);

        // Vaciar Carrito

        vaciarCarrito.addEventListener('click', () => {
    
          VaciarCarro();
           });
      
           pagar.addEventListener('click', pagado);

    }

    function pagado() {
  
      Toastify({
        text: `GRACIAS POR TU COMPRA`,
        duration: 4000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        // close: true,
        // gravity: "top", // `top` or `bottom`
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

const VaciarCarro = () => {
  articulosCarro = []; // reseteamos el arreglo
  localStorage.removeItem('carrito');
  localStorage.removeItem('aceptado');
  contenedorCar.innerHTML = '';
  limpiarHTML()
  carritoVacio.classList.remove("d-none")
  carrito.classList.add("d-none")
}

seguirComprando.addEventListener("click", () => {
  // window.location.href = "https://gaboxd7.github.io/Ecommerce/index.html#section-medio";
  window.location.href = "http://127.0.0.1:5500/index.html#section-medio";

 
})
seguirComprando2.addEventListener("click", () => {
  // window.location.href = "https://gaboxd7.github.io/Ecommerce/index.html#section-medio";
  window.location.href = "http://127.0.0.1:5500/index.html#section-medio";
})
    
    // Eliminar Producto de carrito
  
    function eliminarProducto (e) {
  
      if(e.target.classList.contains('borrar-producto')) {
    
          const productoId = e.target.parentElement.getAttribute('data-id');
 
            articulosCarro = articulosCarro.filter(producto => producto.id !== productoId);
            localStorage.setItem("carrito", JSON.stringify(articulosCarro))
            mostrarCarroHtml()
        
      }
  
      
  }


  function limpiarHTML() {

      total.innerHTML = `$ ${totalGeneral()}`;
      total2.innerHTML = `$ ${validarDcto ? totalGeneral() *0.90 :  totalGeneral()}`;
}

function totalGeneral() {

    let productoTotal = articulosCarro.reduce((total, producto) => total + producto.subtotal, 0);

    return productoTotal ;
}

if (articulosCarro.length == 0 ) 
{
  console.log("vacio  ")
 carritoVacio.classList.remove("d-none")
  carrito.classList.add("d-none")
} else {

  carrito.classList.remove("d-none")
  carritoVacio.classList.add("d-none")

}


const descuento = document.querySelector('#descuento');
const inputDescuento = document.querySelector('#input-descuento');
const containerDescuento = document.querySelector('#container-descuento');
const inputCodigo = document.querySelector('#input-codigo');
const submitCodigo = document.querySelector('#ok-codigo');
const tdPrecio = document.querySelector('#td-precio');

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

 

inputCodigo.addEventListener('input', validarCodigo)


function validarCodigo ()  {
  const texto = inputCodigo.value.toLowerCase().split(' ');
  // console.log(texto.join(''))
  validarDcto = (texto.join('') == "gabosport" )
  if (texto !== '') {
  
    if(validarDcto) {
      console.log(validarDcto)
      console.log("validado")
      localStorage.setItem('aceptado', JSON.stringify(validarDcto));
      limpiarHTML();

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
    } else {
      console.log('y ahora')
    }

  } else 
  console.log(texto)

  // console.log(inputCodigo)
}

console.log(articulosCarro)

// function totalGeneral2() {
 
//    let productoTotal = articulosCarro.reduce((total, producto) => total + producto.subtotal, 0);

//    return productoTotal ;
// }
console.log(validarDcto)
const getTdPrecio = () => {
  if(validarDcto) {
    tdPrecio.classList.add('total-precio-cambio');
  }
 }
 getTdPrecio()