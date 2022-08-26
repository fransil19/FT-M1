'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length>1){
    let pivot = Math.floor(array.length/2);
    let leftArray = []
    let rightArray = []
    for(let i=0; i<array.length; i++){
      if(i !== pivot ){
        if(array[i] < array[pivot]){
          leftArray.push(array[i])
        }
        else{
          rightArray.push(array[i])
        }
      }
    }
    pivot = [array[pivot]]
    if(leftArray.length !== 0 && rightArray.length === 0){
      return [].concat(quickSort(leftArray)).concat(pivot)
    }
    else if(leftArray.length === 0 && rightArray.length !== 0){
      return [].concat(pivot).concat(quickSort(rightArray))
    }
    else{
      return [].concat(quickSort(leftArray)).concat(pivot).concat(quickSort(rightArray))
    }
    
  }
  return array
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array

  let mid = Math.floor(array.length/2);
  let leftArray = array.slice(0,mid)
  let rightArray = array.slice(mid)  

  return merge(mergeSort(leftArray),mergeSort(rightArray))

}

function merge(leftArray,rightArray){
  let newArray = []
  while(leftArray.length && rightArray.length){
    if(leftArray[0] < rightArray[0]){
      newArray.push(leftArray.shift())
    }
    else{
      newArray.push(rightArray.shift())
    }
  }
  return newArray.concat(leftArray).concat(rightArray)
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
