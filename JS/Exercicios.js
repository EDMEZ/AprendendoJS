// 1º imprimir ola mundo
console.log('ola mundo!');
// 2º conversão de tipos, converter um valor de uma constante
// string em numero

const valorstring = "1234";
console.log(typeof valorstring,valorstring);
const modificarvalor = Number(valorstring);
console.log(typeof modificarvalor,modificarvalor);

// 3:manipulação de strings
const palavra = "Javascript é incrivel";
const numeroDecaracteres = palavra.length;
const numerodepalavras = palavra.split(" ").length;
console.log(` o numero de caracteres é ${numeroDecaracteres}`);
console.log(` o numero de palavras é ${numerodepalavras}`);

// 4º arrays e loops

const nomes = ["Jõao","carlos","André","Miqueias"];
for(let i = 0;i < nomes.length;i++){
    console.log(nomes[i])
}

//5º relogio
const ConverterHorario = (Horario) =>{
    // const hora = Horario.split(":")[0]
    // const minuto = Horario.split(":")[1]

    const [hora,minuto] = Horario.split(":");

    const hora12 = hora % 12 || 12;
    let periodo = "AM"
    if(hora > 12){
        periodo = "PM"
    }
    console.log(`${hora12}:${minuto} ${periodo}`);
}
ConverterHorario("14:00");