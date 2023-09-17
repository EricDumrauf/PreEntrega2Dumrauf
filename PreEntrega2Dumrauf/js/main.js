let superuser = 'admin' 
let password = '1234'

class Producto{
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const productos = [];

let user = prompt('Ingrese el usuario').toLowerCase();
let pass = prompt('Ingrese la contraseña');

switch (true) {
  case user !== superuser:
    alert("El usuario es incorrecto");
    break;
  case pass !== password:
    alert("La contraseña es incorrecta");
    break;
  default:
    alert("Credenciales correctas");
    let cant_prod = Number(prompt('Ingrese la cantidad de productos a cargar'));
    if (cant_prod < 1) {
      alert("La cantidad de productos a cargar debe ser mayor que 0");
    } else {
      add_products(cant_prod);
      mostrarProductos(productos);
      var consulta_filtro = prompt("¿Desea filtrar productos? La respuesta debe SI o NO").toLowerCase();
      if (consulta_filtro == 'si'){
        var respuesta = prompt("Ingrese la 'categoria' por el cual desea filtrar (la respuesta debe ser 'nombre' o 'precio')").toLowerCase();
        switch (respuesta){
          case 'nombre':
            var filtro_nombre = prompt("Ingrese el nombre por el cua desea filtrar").toLowerCase()
            filtrarProductos(productos, (producto) => producto.nombre == filtro_nombre);
            break;
          case 'precio':
            var filtro_precio = Number(prompt("Ingrese el valor por el cual desea filtrar"))
            var comp = prompt("La comparacion por precio deben ser 'igual', 'menor igual' o 'mayor igual'. Ingrese una de esas opciones").toLowerCase()
            if (comp == 'igual'){
              filtrarProductos(productos, (producto) => producto.precio == filtro_precio);
            }
            else if(comp == 'menor igual'){
              filtrarProductos(productos, (producto) => producto.precio <= filtro_precio);
            }
            else if(comp == 'mayor igual'){
              filtrarProductos(productos, (producto) => producto.precio >= filtro_precio);
            }
            else{
              alert("La comparacion es incorrecta");
            }
            break;
          default:
            alert("La categoria ingresada es incorrecta");
            break;
        }        
      }
      else if (consulta_filtro == 'no') {
        alert("Fin de la carga de productos, no se solicitó filtrado");
      }
      else {
        alert("Error en el valor ingresado");
      }  
    }
    break;
}

function add_products(cant_prod){
    for (let i = 1; i <= cant_prod; i++){
        const nombre = prompt('Ingrese el nombre del producto');
        const precio = Number(prompt('Ingrese el precio del producto'));
        const stock = Number(prompt('Ingrese el stock del producto'));
        const producto = new Producto(nombre, precio, stock);
        productos.push(producto);
    }
    alert("Los productos fueron cargados con éxito");
}

function mostrarProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    alert("Producto N°" + (i + 1) + ": " + "Nombre: " + productos[i].nombre + " - Precio: " + productos[i].precio + " - Stock: " + productos[i].stock);
  }
}

function filtrarProductos(productos, filtro) { 
  const productosFiltrados = productos.filter(filtro);
  if (productosFiltrados.length > 0) {
    alert("Productos que cumplen la condición del filtro:");
    mostrarProductos(productosFiltrados);
    alert("Fin del listado del filtro de productos");
  } else {
    alert("No hay productos que cumplan la condición del filtro");
  }
}