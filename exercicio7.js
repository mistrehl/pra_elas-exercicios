var lado1 = 3
var lado2 = 3
var lado3 = 3

if(lado1 == lado2 && lado1 == lado3){
    console.log("Triangulo equilátero")
}
else if (lado1 == lado2 || lado1 == lado3 && lado2 !=lado3){
    console.log('Triângulo isósceles')
}
else{
    console.log('Triângulo escaleno')
}
