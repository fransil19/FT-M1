
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5; 
var b = 10; 
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //devuelve 10
  console.log(a); // devuelve 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); //devuelve 8
    b = c; 
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //devuelve 9
}
c(8,9,10);
console.log(b); //devuelve 10
console.log(x); //devuelve 1
```

```javascript
console.log(bar); //undefined
console.log(baz); //error no existe la variable hasta que se ejecuta ya que no se declara con var
foo(); //Devuelve Hola ya que la funcion y su contenido fue guardada en el Hoisting
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony"; 
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //Devuelve Franco porque el Scope o contexto se crea con una funcion u objeto
```

```javascript
var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})();
console.log(instructor);//Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The Flash
    console.log(pm); //reverse Flash
}
console.log(instructor); //The Flash
console.log(pm);//Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // convierte a int el "3" y devuelve 2
"2" * "3" // Convierte en numero las cadenas y multiplica, resultado = 6
4 + 5 + "px"// Devuelve 9px
"$" + 4 + 5 // devuelve $45
"4" - 2 // devuelve 2
"4px" - 2 //NaN porque no puede convertir "4px" a numero y no puede realizar otra operacion que sea resta
7 / 0 // Infinito
{}[0] // undefined
parseInt("09")//Devuelve 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10]// 23 , transforma [3] en string y concatena con + quedando '33', luego realiza lo mismo con [10] pero lo convierte en int al realizar la resta y tambien a '33' lo convierte en int
3>2>1 // Devuelve falso, porque por orden de presedencia y asociatividad empieza por 3>2 que es true, luego hace true>1 que seria 1>1 entonces es falso
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined porque se asigna espacio de memoria para a pero no se asigna en la fase de lecturia y memoria.
   console.log(foo()); //2 porque se asigna espacio en memoria para foo y su contenido, es por eso que al llamarlo antes puede ejecutarse.

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //devuelve 'Meow Mix' debido a que no ingresa en el if al ser falsa la condicion y devuelve la variable global snack
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); //Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // 1 
   setTimeout(function() { console.log(2); }, 1000); //4
   setTimeout(function() { console.log(3); }, 0); //3
   console.log(4); //2
}

printing();
```
