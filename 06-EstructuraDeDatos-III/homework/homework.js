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
    if(!this.left && !this.right) return 0
    if(this.left && !this.right){
      return 1+this.left.size()+1
    }
    else if(!this.left && this.right){
      return 1+this.right.size()+1;
    }
    else{
      return 1+(this.left.size()+1)+(this.right.size()+1)
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
  this.depthFirstForEach = function(){}
  this.breadthFirstForEach = function(){}
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
