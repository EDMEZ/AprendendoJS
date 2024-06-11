const elemento = document.querySelector('.minhaClasse');
console.log(elemento.textContent)

elemento.textContent = "Texto alterado";

const link = document.querySelector("a");

link.setAttribute("Href","https://github.com/EDMEZ"); 
//adicionando um atributo href
//com um link para a minha pagina do github

link.textContent = "Perfil GitHub"; //atualizando o texto do link
console.log(link.getAttribute("href")); //console log do link
link.removeAttribute("target")//removido o atributo target _blank

const novoElemento = document.querySelector("#meuId");
novoElemento.classList.add("novaClasse"); //adicionar classes
console.log(novoElemento);

novoElemento.classList.remove("novaClasse");//remover classes
console.log(novoElemento)


const Elemento4 = document.querySelector("#meuInput");
const pai = Elemento4.parentNode; //identificar o elemento pai
console.log(pai);

const primeiroFilho = pai.firstChild; // primeiro filho da classe pai
// tambem é possivel usar o firstElementChild para retornar o Primeiro elemento
console.log(primeiroFilho)

const ultimofilho = pai.lastChild; // ultimo filho da classe pai,
// tambem é possivel usar o lastElementChild para retornar o ultimo elemento
console.log(ultimofilho);


//Manipulação de estruturas no DOM

const AdicionandoElemento = document.createElement("Div");
console.log(AdicionandoElemento);

AdicionandoElemento.textContent = "Minha div de JavaScript";

document.body.appendChild(AdicionandoElemento);//inserindo elemento no html apos todos os outros

document.body.insertBefore(AdicionandoElemento,pai) // no insertBefore vc declara
//primeiro o elemento que sera adicionado e apos isso onde ele será adicionado

document.body.removeChild(elemento);// removendo elemento através do javascript

//Eventos

const botao = document.querySelector("#botaoCriar");
const botaoClicadoFunction = ()=>{
    botao.addEventListener("click",()=>{
        console.log("botaoClicado")
    })
}
botaoClicadoFunction()//função que adiciona um evento ao botao

const CampoInput = document.querySelector("#meuInput")
CampoInput.addEventListener("keydown",()=>{
    console.log("Tecla Pressionada")
}) //adicionado o evento no input
 
const form = document.querySelector("form")
    
    form.addEventListener("submit",()=>{
        event.preventDefault();
        console.log("Form Enviado");
    })//Modificando o Form Com Eventos;

//Propagação de Eventos

document.querySelector("#elementoPai").addEventListener("click",()=>{
    console.log("Clique Capturado no Pai");
});
// os eventos aplicados no pai também serão aplicados no filho,
//EX: o evento acima também ocorre quando clicamos no elemento filho
//elemento pai output: "Clique Capturado no Pai"

document.querySelector("#elementoFilho").addEventListener("click",()=>{
    event.stopPropagation(); // esse comando vai parar a propagação dos eventos no elemento filho
    //agora os eventos do elemento pai não serão executados no elemento filho que conter essa linha de comando
    
    console.log("Elemento Filho")
})
//elemento filho output: "Clique Capturado no Pai","Elemento filho";
//o elemento filho esta executando 2 eventos ao mesmo tempo

