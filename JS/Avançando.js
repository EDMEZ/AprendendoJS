// manipulação de arrays
// adicionar itens ao array;
 const frutas = ["Maça","banana","Pêra"];
 frutas.unshift("Acerola"); //vai adicionar antes dos itens do array;
 frutas.push("abacaxi"); // vai adicionar apos os itens do array;
 console.log(frutas);

 frutas.shift();//vai remover o primeiro elemento

 console.log(frutas);

 const numeros = [1,2,3,4,5,6,7,8,9,10]

 const numeropar = numeros.find((NumPar) => NumPar % 2 === 0); // 
 //find encontrará o primeiro elemento que bate com o criterio que foi definido
 console.log(numeropar);

 const numeropares = numeros.filter((Numspar) => Numspar % 2 === 0);
 //filter listará todos os elementos que batem com o criterio definido
 console.log(numeropares);

 const frase = "               Olá, Mundo!       ";
 const palavras = frase.trim().split(" ");
 //trim remove os espaços em branco da string,e o split divide o elemento
 //caso ele contenha um espaço entre as aspas, ele divide o elemento em palavras
 //caso não tenha espaço entre as aspas ele retorna o numero de caracteres
 //EX: frase.split("") output: 'o','l','a',',','m','u','n','d','o'
 //EX: frase.split(" ") output: 'ola','mundo'

 console.log(frase);
 console.log(palavras);

 const frase2 = "Teste de strings";
 console.log(frase2.startsWith("Teste")) //filtro pra encontrar letra ou palavra que começa

 const idade = 19;
 
 if(idade < 18){
    throw new Error("Você deve ter pelo menos 18 anos")
 }
 //throw new error vai retornar o erro como um valor no console
 //caso a condicional não seja cumprida, assim como no exemplo acima;

try{
    const idade = 16;
    if(idade < 18){
        throw new Error("Menos de 18 anos");
    }
}catch(Error){
    console.log(Error.message)
}
console.log("Continuando o programa!");

//com um trycatch vc consegue captar o erro em uma condicional e mesmo assim
// continuar o codigo, porque ele esta tratando os erros.
//fazendo assim o seu programa não travar caso ocorra um erro.



//callback => função, callback são funções que vao ser executadas dentro de
//outras funções

cumprimentar = (nome, retorno) =>{
    console.log(` Olá, ${nome}`.trim());
    retorno();
}
saudacao = () =>{
    console.log("  Como você está?  ".trim()) //exemplo usando 2 funções nomeadas
}
cumprimentar("Matheus",saudacao);

cumprimentar("Eduardo",() => { //exemplo usando função sem nome    
    console.log("Você está bem?")
})


//settimeout é outro exemplo de callback
 
// MostrarMensagem = () =>{
//     console.log("Está mensagem deveria aparecer após 3 segundos")
// }
// console.log("Uma mensagem será exibida após 3 segundos"); 
// setTimeout(()=>{
//    MostrarMensagem();
// },/*3000*/ ); 

//Promises

// const Promessa = new Promise((resolve,reject) => {
//     try{
//         const condicao = true

//         if(condicao){
//             resolve("condição verdadeira");
//         }
//         else{
//             reject("condição falsa");
//         }
//     }
//     catch(Error){
//         throw new Error.message;
//     }
// });
// Promessa.then((mensagem)=>{
//     console.log(mensagem)
// })

//nas promises há 2 maneiras de captar os rejects, usando try catch como
//no exemplo acima ou 

// const Promessa2 = new Promise((resolve,reject) => {
    
//     setTimeout(()=>{
//         const condicao = true

//     if(condicao){
//         resolve("condição verdadeira");
//     }
//     else{
//         reject("condição falsa");
//     }
//     },3000)
// });
// Promessa2
// .then((mensagem)=>{
//     console.log(mensagem)
// })
// .catch((Erro)=>{
//     console.log(Erro)
// })

//bibliotecas feitas são "Promises Based" 

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,10000,"teste");
// })

// Promise.all([promise1,promise2]).then((valores)=> console.log(valores))

//Async await

ObterValor = async()=>{
    const Promessa = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve("Valor Obtido"),2000)
    });
    const EsperaPromessa = await Promessa;
    
    console.log(EsperaPromessa);

}
ObterValor();


ObterValorComErro = async()=>{
    try{
        const Promessa = new Promise((resolve,reject)=>{
            setTimeout(()=> reject("Valor Com Erro"),2000)
        });
        const EsperaPromessa = await Promessa;
        
        console.log(EsperaPromessa);
    }
    catch(Erro){
        console.log(Erro)
    }
}
ObterValorComErro();

//JSON(JavaScript Object Notation)
//{Nome: "Teste"} => {"Nome":"Teste"}
//JSON padroniza a comunicação
//fazendo o back end e o front end se comunicarem em apenas uma linguagem

const objeto = {
    nome:"Jõao",
    idade:35
}; 
const jsonString = JSON.stringify(objeto);

console.log(objeto); //OBJETO
console.log(jsonString); //Transformou o objeto em JSON
console.log(typeof jsonString); // mostra o tipo do JSON => string

const Json = '{"Nome": "Jõao","idade":30}'; 
//agora pegamos o outro objeto já como json(acima) 
const objeto2 = JSON.parse(Json); // e transformamos novamente em objeto

console.log(objeto2); //output === objeto