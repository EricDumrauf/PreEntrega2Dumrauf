let superuser = 'admin' 
let password = '1234'

class Producto{
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

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
    }
    break;
}

function add_products(cant_prod){
    const productos = [];
    for (let i = 1; i <= cant_prod; i++){
        const nombre = prompt('Ingrese el nombre del producto');
        const precio = Number(prompt('Ingrese el precio del producto'));
        const stock = Number(prompt('Ingrese el stock del producto'));
        const producto = new Producto(nombre, precio, stock);
        productos.push(producto);
    }

    alert("Los productos fueron cargados con éxito");
    
    for (let i = 0; i < productos.length; i++) {
        alert("Producto N°" + (i+1) + " cargado: " + "Nombre: " + productos[i].nombre + " - Precio: "  + productos[i].precio + " - Stock: " + productos[i].stock);
    }
}