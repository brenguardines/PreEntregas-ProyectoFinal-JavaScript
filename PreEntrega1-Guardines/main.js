alert("Bienvenido/a a la tienda de Alfajores");

let nombreUsuario = prompt("Ingrese su nombre");

const usuarioAutorizado = "tienda";
const contraseniaAutorizada = "alfajores";

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");

if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada){
    saludarUsuario(nombreUsuario);

    alert("Superando los $2000 obtiene un 10% de descuento!!!");

    let alfajorDDLchocolate = 100; 
    let alfajorDDLchocolateBlanco = 50;
    let alfajorFruta = 200; 

    let alfajor = -1;
    let totalGastado = 0;

    while(alfajor != 0){
        console.log("1: Alfajor de dulce de leche con chocolate $100");
        console.log("2: Alfajor de dulce de leche con chocolate blanco $50");
        console.log("3: Alfajor de fruta $200");
        alfajor = parseInt(prompt("Ingrese el numero de alfajor que desea ; para salir ingrese 0"));        

        switch(alfajor){
            case 1:
                totalGastado += 100;
                break;
            case 2: 
                totalGastado += 50;
                break;
            case 3:
                totalGastado += 200;
                break;
            default:
                console.log("Por favor ingrese un numero de la lista");
                break;
        }

    }

    if(totalGastado >= 2000){
        alert("Por haber superado $2000 obtuvo un %10 de descuento!!!");
        console.log("Su gasto total sin el descuento es de: $" + totalGastado );
        console.log("Su gasto total con el 10% de descuento es: $" + descuentoDel10(totalGastado));
    }else{
        console.log("Su gasto total es de: $" + totalGastado);
    }
    

}else{
    alert("Usuario o contraseña incorrecta");
}

//Funciones

function saludarUsuario(nombreUsuario){
    alert("Hola " + nombreUsuario);
}

function descuentoDel10(monto){
    return monto * 0.9;
}
