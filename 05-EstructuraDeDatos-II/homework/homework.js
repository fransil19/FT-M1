"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this.add = function (data){
    const node = new Node(data);
    let actual = this.head
    if(!actual){
      this.head = node
      return undefined
    }

    while(actual.next){
      actual = actual.next
    }

    actual.next = node
  }

  this.remove = function(){
    let actual = this.head;
    if(!actual) return null;
    if(!actual.next) {
      this.head = null;
      return actual.value;
    }
    let previo = actual;
    while(actual.next){
      previo = actual;
      actual = actual.next;
    }

    previo.next = null;
    return actual.value
  }

  this.search = function(value){
    let actual = this.head;
    if(!actual){

      return null;
    } 
    let condicion = true;
    
    while(condicion){
      if(typeof value === 'function'){
        if(value(actual.value)){
          return actual.value
        }
      }
      if(actual.value === value){
        return actual.value
      }
      else if(!actual.next){
        condicion = false
      }
      else{
        actual = actual.next;
      }
    }
    return null
  }
}

function Node(value) {
  this.value = value;
  this.next = null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.buckets = new Array(35)
  this.numBuckets = this.buckets.length

  this.hash = function(input){
    let sum = 0;
    for(let i=0; i<input.length; i++){
      sum += input.charCodeAt(i)
    }
    return Math.floor(sum%this.numBuckets)
  }

  this.set = function(clave,valor){
    if(typeof clave !== 'string') throw TypeError('Keys must be strings')
    const bucket = this.hash(clave);
    const obj = {}
    obj[clave] = valor

    if(!Array.isArray(this.buckets[bucket])){
      const arreglo = []
      arreglo.push(obj)
      this.buckets[bucket] = arreglo
    }
    else if(this.hasKey(clave)){
      for(let i=0; i<this.buckets[bucket].length; i++){
        if(this.buckets[bucket][i].hasOwnProperty(clave)){
          this.buckets[bucket][i] = obj;
        }
      }
    }
    else{
      this.buckets[bucket].push(obj);
    }
    
  }

  this.get = function(clave){
    for(let i=0; i<this.buckets.length; i++){
      if(this.buckets[i]){
        for(let j=0; j<this.buckets[i].length; j++){
          if(this.buckets[i][j].hasOwnProperty(clave)){
            return this.buckets[i][j][clave];
          }
        }
      }
    }
  }

  this.hasKey = function(clave){
    for(let i=0; i<this.buckets.length; i++){
      if(this.buckets[i]){
        for(let j=0; j<this.buckets[i].length; j++){
          if(this.buckets[i][j].hasOwnProperty(clave)){
            return true;
          }
        }
      }
    }
    return false;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
