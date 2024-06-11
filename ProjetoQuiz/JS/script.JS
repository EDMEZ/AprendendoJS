const questions = [
    {
      question: "Qual é a capital do Brasil?",
      choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "Qual é a capital da Argentina?",
      choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
      answer: "Buenos Aires",
    },
    {
      question: "Qual é a capital da França?",
      choices: ["Roma", "Madri", "Paris", "Londres"],
      answer: "Paris",
    },
    {
      question: "Qual é a capital da Espanha?",
      choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
      answer: "Madri",
    },
    {
      question: "Qual é a capital da Itália?",
      choices: ["Veneza", "Milão", "Roma", "Nápoles"],
      answer: "Roma",
    },
    {
      question: "Qual é a capital do Canadá?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Qual é a capital dos Estados Unidos?",
      choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
      answer: "Washington D.C.",
    },
    {
      question: "Qual é a capital do Reino Unido?",
      choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
      answer: "Londres",
    },
  ];
const questionElement = document.querySelector("#question");
const choiceElements = document.querySelectorAll(".choice");
const nextButton = document.querySelector("#Next");
const scoreElement = document.querySelector("#score");
const wrongElement = document.querySelector("#wrong");

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false

const loadquestion = () => {
    const currentQuestionData = questions[currentQuestion]
    questionElement.innerText = currentQuestionData.question;
    
    const choices = shuffleArray(currentQuestionData.choices);

    for (let i = 0; i < choiceElements.length; i++){
        choiceElements[i].innerText = choices[i]
    }
    
    answerChosen = false; 
}

const shuffleArray = (array) =>{ 
  let currenIndex = array.length
  let temporaryValue;
  let RandomIndex;

  while(0 !== currenIndex) {
    RandomIndex = Math.floor(Math.random() * currenIndex);
    currenIndex -= 1; 
        
    temporaryValue = array[currenIndex]
    array[currenIndex] = array[RandomIndex]
    array[RandomIndex] = temporaryValue;
  }
  return array
}

const checkanswer = (e) => {
  if(answerChosen) return;

  answerChosen = true;

  if(e.target.innerText === questions[currentQuestion].answer){
    score++;
    scoreElement.innerText = `Pontuação: ${score}`;
    alert("CORRETO!")
  }else{
    wrong++;
    wrongElement.innerText = `Erros: ${wrong}`
    alert(`ERRADO! A resposta correta é ${questions[currentQuestion].answer}`)
  }
}

choiceElements.forEach((btn)=>{
  btn.addEventListener("click",checkanswer);
})
nextButton.addEventListener("click",()=>{
  if(!answerChosen){
    alert("Por favor selecione uma resposta");
    return;
  } 
  currentQuestion++;

  if(currentQuestion < questions.length){
    loadquestion();
  }else{
    alert(`Fim de jogo! você acertou: ${score} e errou: ${wrong}`)
    Restartquiz();
  }
})
const Restartquiz = () =>{
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  scoreElement.innerText = "Pontuação: 0";
  wrongElement.innerText = "Erros: 0"
  loadquestion();
}

loadquestion();