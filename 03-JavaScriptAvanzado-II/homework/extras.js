//Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

const { prototype } = require("events")

String.prototype.repeatify = function (num){
    if(!Number.isInteger(num)){
        return 'Debe ingresar un numero'
    }
    if(num<0){
        return 'Debe ingresar un numero mayor a 0'
    }
    if(num===0){
        return ''
    }
    let cadena = ''
    for(let i=0; i<num; i++){
        cadena +=this
    }
    return cadena
}
console.log('hola'.repeatify(3));   //holaholahola


/*Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
Agregá un nuevo método al prototipo llamado `getPerimeter`.

Probá tu solución con el siguiente código:*/

let shape = {
    type: '',
    getType : function(){
        return this.type
    }
}

function Triangle(a,b,c){
    this.a=a;
    this.b=b;
    this.c=c;
    this.type='Triangle';
}

Object.setPrototypeOf(shape,Triangle)
Triangle.prototype = shape;

Triangle.prototype.getPerimeter= function(){
    return this.a + this.b + this.c;
}

var t = new Triangle(1, 2, 3);
console.log(t instanceof Triangle);
// true
console.log(shape.prototype.isPrototypeOf(t));
// true
console.log(t.getPerimeter());
// 6
console.log(t.getType())
// "Triangle"


//Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

//Probá tu solución con el siguiente código:


var c = new Circle(2);
c instanceof Circle
// true
Shape.prototype.isPrototypeOf(c);
// true
c.getPerimeter();
// 12.566370614359172
c.getType();
// "Circle"
