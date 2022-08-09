'use strict'

function BinarioADecimal(num) {
  //Se separa cada caracter de la cadena en una lista.
  let lista = num.split("")
  
  let nueva_lista = lista.map((numero,indice) => {
    return 2**((lista.length-1)-indice) * Number(numero)
  })

  let resultado = nueva_lista.reduce((suma,valor) => {
    return suma + valor
  },0)

  return resultado
}

function DecimalABinario(num) {
  let lista = []
  
  while(num>0){
    lista.unshift(num%2)
    num = Math.floor(num/2)
  }

  let resultado = lista.join("")
  return resultado
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}