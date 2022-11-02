/* Aula 20 MaiaQuiz  */

function audiobg() {
  const audioBG = new Audio("../audio/soundAmbiente2.mp3");
  audioBG.play();
  setTimeout(audiobg, 1000);
}
audiobg();

let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0; // pontos para o placar
let placar = 0; // placar

// PERGUNTA
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// ALTERNATIVAS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");
// ol li com as alternativas
let alternativas = document.querySelector("#alternativas");

const q0 = {
  numQuestao: 0,
  pergunta: "Pergunta",
  alternativaA: "Alternativa A",
  alternativaB: "Alternativa B",
  alternativaC: "Alternativa C",
  correta: "0",
};

const q1 = {
  numQuestao: 1,
  pergunta: "Choose the word with its corresponding phonetic symbol 'lɪv'  ",
  alternativaA: "LIVE",
  alternativaB: "LEAVE",
  alternativaC: "LIFE",
  correta: "LIVE",
};

const q2 = {
  numQuestao: 2,
  pergunta: "Choose the word with its corresponding phonetic symbol 'θɑt' ",
  alternativaA: "FLOOR",
  alternativaB: "ANGRY",
  alternativaC: "THOUGTH",
  correta: "THOUGTH",
};

const q3 = {
  numQuestao: 3,
  pergunta: "Choose the word with its corresponding phonetic symbol 'tɹi' ",
  alternativaA: "TREE",
  alternativaB: "THREE",
  alternativaC: "FLEW",
  correta: "TREE",
};

const q4 = {
  numQuestao: 4,
  pergunta: "The phonetic symbol 'tʃɪ - kɪn' corresponds to which word?",
  alternativaA: "CHILDREN",
  alternativaB: "HUNGRY",
  alternativaC: "CHICKEN",
  correta: "CHICKEN",
};

const q5 = {
  numQuestao: 5,
  pergunta: "What is the phonetic symbol of the word 'HUNDRED'?",
  alternativaA: "ðɛɹ",
  alternativaB: "hən - dɹɪd",
  alternativaC: "θɹi",
  correta: "hən - dɹɪd",
};

const q6 = {
  numQuestao: 6,
  pergunta: " The phonetic symbol 'slip' corresponds to which word?",
  alternativaA: "SLEEP",
  alternativaB: "THAT",
  alternativaC: "SHEEP",
  correta: "SLEEP",
};

const q7 = {
  numQuestao: 7,
  pergunta: " What is the phonetic symbol of the word 'BEACH'?",
  alternativaA: "kɪ - tʃɪn",
  alternativaB: "bit",
  alternativaC: "bitʃ",
  correta: "bitʃ",
};

const q8 = {
  numQuestao: 8,
  pergunta: "The phonetic symbol 'ɹɛ - kəɹd' corresponds to which word?",
  alternativaA: "RECALL",
  alternativaB: "RECORD",
  alternativaC: "STILL",
  correta: "RECORD",
};

const q9 = {
  numQuestao: 9,
  pergunta: "What is the phonetic symbol of the word 'STILL'?",
  alternativaA: "slæŋ",
  alternativaB: "snoʊ",
  alternativaC: "stɪl",
  correta: "stɪl",
};

const q10 = {
  numQuestao: 10,
  pergunta: "The phonetic symbol 'bɛɹ' corresponds to which word?",
  alternativaA: "BY",
  alternativaB: "BEAR",
  alternativaC: "FISH",
  correta: "BEAR",
};

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;

let totalDeQuestoes = questoes.length - 1;
console.log("Total de questões " + totalDeQuestoes);
total.textContent = totalDeQuestoes;

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  //audiobg();
  numero.textContent = nQuestao;
  numQuestao.textContent = questoes[nQuestao].numQuestao;
  pergunta.textContent = questoes[nQuestao].pergunta;
  a.textContent = questoes[nQuestao].alternativaA;
  b.textContent = questoes[nQuestao].alternativaB;
  c.textContent = questoes[nQuestao].alternativaC;
  a.setAttribute("value", nQuestao + "A");
  b.setAttribute("value", nQuestao + "B");
  c.setAttribute("value", nQuestao + "C");
}

function bloquearAlternativas() {
  a.classList.add("bloqueado");
  b.classList.add("bloqueado");
  c.classList.add("bloqueado");
}

function desbloquearAlternativas() {
  a.classList.remove("bloqueado");
  b.classList.remove("bloqueado");
  c.classList.remove("bloqueado");
}

function verificarSeAcertou(nQuestao, resposta) {
  let numeroDaQuestao = nQuestao.value;
  console.log("Questão " + numeroDaQuestao);

  let respostaEscolhida = resposta.textContent;
  //console.log("RespU " + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta;
  //console.log("RespC " + certa)

  if (respostaEscolhida == certa) {
    //console.log("Acertou")
    //respostaEsta.textContent = "Correta 😊"
    pontos += 10; // pontos = pontos + 10
    switch (numeroDaQuestao) {
      case 1:
        const audioQ1 = new Audio("../audio/live.m4a");
        audioQ1.play();
        break;

      case 2:
        const audioQ2 = new Audio("../audio/thougth.m4a");
        audioQ2.play();
        break;
      case 3:
        const audioQ3 = new Audio("../audio/three.m4a");
        audioQ3.play();
        break;
      case 4:
        const audioQ4 = new Audio("../audio/chicken.m4a");
        audioQ4.play();
        break;
      case 5:
        const audioQ5 = new Audio("../audio/hungry.m4a");
        audioQ5.play();
        break;
      case 6:
        const audioQ6 = new Audio("../audio/sleep.m4a");
        audioQ6.play();
        break;
      case 7:
        const audioQ7 = new Audio("../audio/beach.m4a");
        audioQ7.play();
        break;
      case 8:
        const audioQ8 = new Audio("../audio/Record.m4a");
        audioQ8.play();
        break;
      case 9:
        const audioQ9 = new Audio("../audio/still.m4a");
        audioQ9.play();
        break;
      case 10:
        const audioQ10 = new Audio("../audio/bear.m4a");
        audioQ10.play();
        break;
      default:
        break;
    }
  } else {
    //console.log("Errou!")
    //respostaEsta.textContent = "Errada 😢"
    const audioErr = new Audio("../audio/errSound.Wav");
    audioErr.play();
  }

  // atualizar placar
  placar = pontos;
  instrucoes.textContent = "Pontos " + placar;

  // bloquear a escolha de opcoes
  bloquearAlternativas();

  setTimeout(function () {
    //respostaEsta.textContent = '...'
    proxima = numeroDaQuestao + 1;

    if (proxima > totalDeQuestoes) {
      console.log("End Game!");
      fimDoJogo();
    } else {
      proximaQuestao(proxima);
    }
  }, 250);
  desbloquearAlternativas();
}

function fimDoJogo() {
  instrucoes.textContent = "End Game!";
  numQuestao.textContent = "";

  let pont = "";
  pontos == 0 ? (pont = "point") : (pont = "points");

  pergunta.textContent = "Você conseguiu " + pontos + " " + pont;
  if (pontos <= 50) {
    aviso.textContent = "You got it: " + pontos + " " + pont + " Try again!😢";
  } else if (pontos > 50 && pontos <= 70) {
    aviso.textContent = "You got it: " + pontos + " " + pont + " Very good!😊";
  } else {
    aviso.textContent =
      "You got it: " + pontos + " " + pont + " Congratulations!😊";
  }

  a.textContent = "";
  b.textContent = "";
  c.textContent = "";

  a.setAttribute("value", "0");
  b.setAttribute("value", "0");
  c.setAttribute("value", "0");

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = "none";

  setTimeout(function () {
    pontos = 0; // zerar placar
    location.reload();
  }, 5000);
}
