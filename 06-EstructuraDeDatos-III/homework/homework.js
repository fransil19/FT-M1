"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(data) {
  this.left = null;
  this.right = null;
  this.value = data;

  this.size = function(){
    if(this.left === null && this.right === null) return 1 //Si no tiene hijos devuelvo 0 
    if(this.left !== null && this.right === null){
      return 1+this.left.size()
    }
    else if(this.left === null && this.right !== null){
      return 1+this.right.size();
    }
    else{
      return 1+this.left.size()+this.right.size()
    }
  }

  this.insert = function(data){
    if(this.value > data){
      if(this.left === null){
        this.left = new BinarySearchTree(data)
      }
      else{
        this.left.insert(data)
      }
    }

    if(this.value<=data){
      if(this.right === null){
        this.right = new BinarySearchTree(data);
      }
      else{
        this.right.insert(data)
      }
    }
  }

  this.contains = function(data){
    if(this.value !== null){
      if(this.value === data){
        return true
      }
      if(data < this.value && this.left){
        return this.left.contains(data)
      }
      else if(data >= this.value && this.right){
        return this.right.contains(data)
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }

  this.depthFirstForEach = function(cb,order='in-order'){
    let current = this
    if(order === 'pre-order'){
      cb(this.value);
      if(this.left !== null) this.left.depthFirstForEach(cb,order);
      if(this.right !== null) this.right.depthFirstForEach(cb,order);
      
    }
    else if(order === 'post-order'){
      if(this.left !== null) this.left.depthFirstForEach(cb,order);
      if(this.right !== null) this.right.depthFirstForEach(cb,order);
      cb(this.value);
    }
    else{
      if(this.left !== null) this.left.depthFirstForEach(cb,order);
      cb(this.value);
      if(this.right !== null) this.right.depthFirstForEach(cb,order);
    }
  }

  this.breadthFirstForEach = function(cb,queue = []){
    //guarda lo que hay en la izquierda
    if(this.left !== null){
      queue.push(this.left);
    }
    //guarda lo que hay en la derecha
    if(this.right !== null){
      queue.push(this.right);
    }
    //guarda lo que hay en el nodo que estoy viendo
    cb(this.value);
    //chequeo si hay elementos en la cola
    if(queue.length > 0){
      queue.shift().breadthFirstForEach(cb,queue)
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
