//Exercício 1
/*
let nome; //variável com valor undefinied
let trabalho = null; //variável com valor vazio
let checkpoint = "cidade"; //variável com valor
console.log(nome);//para sair no console
console.log(trabalho);//para sair no console
console.log(checkpoint);//para sair no console
*/
//Exercício 2

/*
//valores das variáveis
let valor1 = 10; 
let valor2 = 20;
let valor3 = 30;

//estruturas de decisão
if (valor1 >= 8) //checa se valor1 maior igual a 8
{
    console.log("O valor é igual ou maior que 8"); //se for, apresenta no console a mensagem
}
if (valor2 != 25) //checa se valor2 é diferente de 25
{
    console.log("O valor é diferente de 25"); //se for, apresenta no console a mensagem
}
if (valor3 ==30) //checa se valor3 é igual a 30
{
    console.log("O valor é de fato igual a 30")//se for, apresenta no console a mensagem
}
*/
//Exercício 3
/*

//declaração das variáveis
let peso = prompt("Digite o seu peso aqui"); //solicitando uma entrada de dados
let altura = prompt("Digite a altura aqui"); //solicitando uma entrada de dados
let imc = peso / (altura ** 2); //calculo do imc

if(imc < 18.5)  //checa se imc estiver abaixo de 18.5
{
    alert("Abaixo do peso ideal"); //se for, está abaixo do peso 
}
else if(imc > 24.9) //checa se imc estiver abaixo de 18.5
{
    alert("Acima do peso ideal"); //se for, está acima do peso
}
else //checa se imc estiver entre  18.5 e 24.9
{
    alert("Peso ideal") // se for, está no peso ideal
}
*/
//Exercício 4
/*
// declaração da variável
let idade = prompt('Digite sua idade aqui'); //solicitando uma entrada de dados

if(idade <= 12) //checa se a idade é igual ou abaixo de 12
{ 
    alert('Você é uma criança'); // se for, é uma criança
}
else if(18 < idade && idade <= 60) //checa se a idade está entre 18 e 60, podendo ser 60
{ 
    alert('Você é um adulto'); // se for, é um adulto
}
else if(idade > 60) //checa se a idade é acima de 60
{
    alert('Você é um idoso'); // se for, é um idosos
}
else //checa se a idade está entre 12 a 18
{
    alert('Você é um adolescente'); // se for, é um adolescente
}
*/
// Exercício 5
/*
//Declaração de variáveis
let usuario = prompt('Digite o nome de usuário'); //solicitando uma entrada de dados
let senha = parseInt(prompt('Digite a senha')); //solicitando uma entrada de dados

if(usuario == 'admin' && senha == 1234) //checa se o usuario e a senha estão corretos
{
    alert('Você está logado'); //se for, você está logado
}
else{
    alert('Houve uma falha na autenticação'); //se não for, não está logado
} 
*/
//Exercício 6
/*
// declaração das variáveis
let nota1 = parseFloat(prompt('Digite a 1° nota: ')); //solicitando uma entrada de dados
let nota2 = parseFloat(prompt('Digite a 2° nota: ')); //solicitando uma entrada de dados
let nota3 = parseFloat(prompt('Digite a 3° nota: ')); //solicitando uma entrada de dados
let nota4 = parseFloat(prompt('Digite a 4° nota: ')); //solicitando uma entrada de dados
let nota5 = parseFloat(prompt('Digite a 5° nota: ')); //solicitando uma entrada de dados
let nota6 = parseFloat(prompt('Digite a 6° nota:')); //solicitando uma entrada de dados
let nota7 = parseFloat(prompt('Digite a 7° nota: ')); //solicitando uma entrada de dados
let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7; //calculo da média

if (media >= 6) //checa se a média é 6 para cima
{
    alert('Parabéns, você foi aprovado, pois obteve uma média maior ou igual a 6'); //se for, aluno aprovado
}
else{
    alert('Infelizmente você foi reprovado, pois obteve uma média inferior a 6'); //se não for, aluno reprovado
}
*/
//Exercício 7
/*
//declaração de variáveis
let nome = prompt('Digite seu nome: ') //solicitando uma entrada de dados
let idade = prompt('Digite sua idade: ') //solicitando uma entrada de dados
let curso = prompt('Digite seu curso de atuação: ') //solicitando uma entrada de dados
let ano = prompt('Digite seu ano do curso: ') //solicitando uma entrada de dados

//impressões na tela do site
document.write(nome)
document.write('<br>')
document.write(idade)
document.write('<br>')
document.write(curso)
document.write('<br>')
document.write(ano)
*/
//Exercício 8 
/*
//declaração de variáveis
let texto = 'Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.';

console.log(texto.indexOf('em'))
console.log(texto.lastIndexOf('ia'))
console.log(texto.slice(27, 34))
console.log(texto.slice(92, 99))
*/