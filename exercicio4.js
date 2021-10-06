var salarioAtual = 2800.00
var aumento1 = salarioAtual * 1.2
var aumento2 = salarioAtual * 1.15
var aumento3 = salarioAtual * 1.1
var aumento4 = salarioAtual * 1.05

if(salarioAtual <= 2800.00){
    console.log('Salário antes do reajuste: ' + salarioAtual + '\n' + 
    'Percentual de aumento de 20%.' + '\n' + 
    'Valor do aumento: ' + (aumento1 - salarioAtual) + '\n' +
    'Novo salário após o aumento: ' + aumento1)
}
else if(salarioAtual <= 7000.00){
    console.log('Salário antes do reajuste: ' + salarioAtual + '\n' + 
    'Percentual de aumento de 15%.' + '\n' + 
    'Valor do aumento: ' + (aumento2 - salarioAtual) + '\n' +
    'Novo salário após o aumento: ' + aumento2)
}
else if(salarioAtual <= 15000.00){
    console.log('Salário antes do reajuste: ' + salarioAtual + '\n' + 
    'Percentual de aumento de 10%.' + '\n' + 
    'Valor do aumento: ' + (aumento3 - salarioAtual) + '\n' +
    'Novo salário após o aumento: ' + aumento3)
}
else{
    console.log('Salário antes do reajuste: ' + salarioAtual + '\n' + 
    'Percentual de aumento de 5%.' + '\n' + 
    'Valor do aumento: ' + (aumento4 - salarioAtual) + '\n' +
    'Novo salário após o aumento: ' + aumento4)
}







