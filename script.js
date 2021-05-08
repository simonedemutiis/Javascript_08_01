const valueBoxUno = Math.floor(Math.random() * 11);
const valueBoxDue = Math.floor(Math.random() * 11);

//Inserisco i valori dei box all'interno dei div
const boxUno = document.getElementById("random1");
boxUno.innerHTML = valueBoxUno;

var boxDue = document.getElementById("random2");
boxDue.innerHTML = valueBoxDue;

function risposta() {
  //1. Leggo il valore dell'input
  let rispostaValueString = document.getElementById("input").value;
  console.log(rispostaValueString);

  //2. Trasformo il valore da string a number
  let rispostaValue = parseInt(rispostaValueString);
  console.log(rispostaValue);

  //3 verifico che la somma sia uguale alla risposta
  const sommaDeiValoriDeiBox = valueBoxUno + valueBoxDue;
  const isCorrect = sommaDeiValoriDeiBox === rispostaValue;

  //4.creo gli elementi e verifico se il risultato è corretto oppure no
  let p1 = document.createElement("h1");
  let p2 = document.createElement("h1");

  p1.textContent = "La tua risposta è corretta";
  p2.textContent = "La tua risposta è sbagliata!";
  const risultato = document.querySelector("#risultato");
  if (isCorrect) {
    isCorrect === rispostaValue;
    risultato.appendChild(p1);
  } else {
    risultato.appendChild(p2);
  }
}
