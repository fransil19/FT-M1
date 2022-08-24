'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const arr = [1];
  let counter = 2;
  while(num > 1){
    if(num%counter === 0){
      arr.push(counter);
      num = num/counter;
    }
    else{
      counter++;
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i<array.length-1; i++){
    for(let j=1; j<array.length-i; j++){
      if(array[j-1]>array[j]){
        let aux = array[j];
        array[j] = array[j-1];
        array[j-1] = aux
      }
    }
  }
  return array
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i<array.length; i++){
    let value = array[i];
    let j = i-1;
    while(j >= 0 && array[j]>value){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = value;
  }
  return array
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i<array.length; i++){//guardo la posicion en cada iteracion como el minimo
    let min = i;
    for(let j=i+1; j<array.length; j++){//recorro y comparo el valor de la posicion actual contra la del minimo, si la del minimo es mayor reemplazo la posicion del minimo con la posicion mas chica
      if(array[min] > array[j]){
        min = j
      }
    }
    let aux = array[min]
    array[min] = array[i] //reemplazo en la posicion del minimo con el valor de la posicion inicial de la iteracion superior
    array[i] = aux//reemplazo en la posicion de la iteracion con el minimo obtenido
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
