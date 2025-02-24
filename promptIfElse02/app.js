let numero = prompt('Digite um número POSITIVO ou NEGATIVO:');

if(numero > 0){
    alert(`O número ${numero} é POSITIVO`);
}else if(numero < 0){
    alert(`O número ${numero} é NEGATIVO`);
}else{
    alert('O número é zero.')
}