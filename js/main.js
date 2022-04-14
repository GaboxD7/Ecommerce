let listaProducto = [];
let filtrarCompra = [];
let subTotal = [];
let carrito = [];
let elegirGenero = "";
let elegirTipo = "";

let total = 0;
let codigo = 1234;


class Producto {
    constructor(genero, tipo, precio, stock) {
        this.genero = genero;
        this.tipo = tipo;
        this.precio = precio
        this.stock = stock;
    }
    favorito() {

    }
    comprar(i) {
        
            // Dato Cantidad
        let cantidad = parseInt(prompt(`¿Cuantos  ${this.tipo} de ${this.genero} usted desea comprar?`));
            // Validacion Cantidad
        while ( cantidad == null  || isNaN(cantidad) == true) {
            cantidad = parseInt(prompt(`¿Cuantos  ${this.tipo} usted desea comprar?`));
        }
        if(( this.stock - cantidad) >= 0 ) {

            this.stock -= cantidad

            subTotal.push(cantidad*this.precio)

            const {genero, tipo , precio} = listaProducto[i];

            carrito.push({genero, tipo, precio, ... {"Cantidad": cantidad}});
      
            let pregunta = validarNull("Desea Realizar otra compra? responda SI o NO");

            while(pregunta !== 'SI' && pregunta !== 'NO') {
                    pregunta = validarNull("Desea Realizar otra compra? responda SI o NO");
            }
            if(pregunta == 'SI'){
                validarCompra();
            } else {
                total = subTotal.reduce((a, b) => a + b, 0);
                this.promocion()
                alert(`Gracias por tu compra, si quieres ver el total ve a la consola y usa "Total"`);
            }
         } else {
             alert(`OHH disculpa tu producto ${this.tipo} esta AGOTADO, solo tenemos ${this.stock} disponible`); 
            validarCompra();    
         }
     
    } 
    promocion() {
        validarPromo();
    }
    }
// C A B A L L E R O
// P O L E R A

listaProducto.push(new Producto('CABALLERO', 'POLERA', 20000, 3));
listaProducto.push(new Producto('CABALLERO', 'PANTALON', 20000, 3));
listaProducto.push(new Producto('CABALLERO', 'ZAPATILLA', 20000, 3));


// D A M A 

listaProducto.push(new Producto('DAMA', 'POLERA', 20000, 3));
listaProducto.push(new Producto('DAMA', 'PANTALON', 20000, 3));
listaProducto.push(new Producto('DAMA', 'ZAPATILLA', 20000, 3));


const validarPromo = () => {

    let pregunta = validarNull("Tiene un codigo PROMOCIONAL? SI/NO");
 
        while ( pregunta !== 'SI' && pregunta !== 'NO') {

            pregunta = validarNull("Tiene un codigo ACA PROMOCIONAL? SI/NO");
          
        }
     
        if (pregunta == 'SI'  ) {
            let  codigoUser = parseInt(prompt("Ingresa tu codigo promocional"));
      
            while (isNaN(codigoUser) == true) {
                codigoUser = parseInt(prompt("Ingresa ACA tu codigo promocional"));
        
            } 

            if(codigoUser !== codigo) {
                alert(`Lo sentimos tu codigo no aplica para el descuento`);

            } else {
                total = total*0.90
                console.log(total)
                  alert( ` ¡Felicitaciones! Promocion aceptada, precio actual: ${total}`)
            }
            
        } else {
        
        }

}

// Funcion que nos valida que un dato no sea null ni este vacio

let validarNull = (texto) => {

    let dato = prompt(texto);

    while(dato == null || dato.trim() == '') {

        dato = prompt(texto)

    } 
    return dato.toUpperCase();
} 

const validarCompra = () => {
    elegirGenero = validarNull('Que genero desea Comprar?\n' +
    'Escriba DAMA o CABALLERO');
    while (elegirGenero !== 'DAMA' && elegirGenero !== 'CABALLERO') {
        elegirGenero = validarNull('Que genero desea Comprar?\n' +
    'Escriba DAMA o CABALLERO');
    }
    
    //  console.log(filtrarGenero)

     if(elegirGenero == "DAMA") {
        valElegirTipo()
       
        filtrarCompra[1].comprar(1);
        
     } else {
         valElegirTipo()
         filtrarCompra[0].comprar(0);

     }

    
        }

const valElegirTipo = () => {
     elegirTipo = validarNull(`Que TIPO Desea Comprar del genero ${elegirGenero}?\n` +
    'Escriba su eleccion: POLERA, PANTALON O ZAPATILLA')
    while(elegirTipo !== 'POLERA' && elegirTipo !== 'PANTALON' && elegirTipo !== 'ZAPATILLA'){
        elegirTipo = validarNull('Que genero desea Comprar?\n' +
    'Escriba su eleccion: POLERA, PANTALON O ZAPATILLA');
     }
     filtrarCompra = listaProducto.filter(element => element.tipo == elegirTipo);
     return elegirTipo;
}  

validarCompra();
