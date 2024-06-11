//1º manipulação de arrays
//criar uma lista de compras inicialmente vazia;
//adicionar 5 itens
//remover o primeiro
//Adicionar um novo item

const ListaCompras = [];
ListaCompras.push("Bala", "Creme", "Leite", "Arroz", "Pão");
console.log(ListaCompras);

ListaCompras.shift();
console.log(ListaCompras);

ListaCompras.unshift("Feijão");
console.log(ListaCompras);

//2º manipulação de array - find
// array = [1,4,7,10,13,16,19]
//encontrar os numeros maiores que 10 usando find ou filter

const Numeros = [1, 4, 7, 10, 13, 16, 19];

const NumeroMaior = Numeros.find((Num) => Num >= 10);
const NumerosMaior = Numeros.filter((Num)=> Num >= 10);
console.log(NumeroMaior);
console.log(NumerosMaior);

//3º manipulação de string 
// dada a string: " Bom dia, Mundo! ".
//Remova os espaços em branco e em seguida divida as string em palavras;

const Hello = " Bom dia, Mundo! "
const HelloAdaptada = Hello.trim() .split(" ")
console.log(HelloAdaptada);
// 4º startswith,endswith
//dada a string "O Rato roeu a roupa do rei de roma",
//verifique se a string começa com "O" e termina com a Letra "a"

const StringRato = "O Rato roeu a roupa do rei de roma";

filtro = ()=>{
    if(StringRato.startsWith("O") && StringRato.endsWith("a")){
        console.log("Condicional verdadeira")
    }else{
        console.log("Condicional Falsa");
    }
}
filtro() // não precisava ser função, mas achei mais interessante

