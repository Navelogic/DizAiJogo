// FASE 1
let small_value = 0;
let big_value = 100;

// Sort a number between small_value and big_value
function sortNumber() {
  return parseInt(Math.random() * big_value + 1)
}

theNumber = sortNumber();
console.log("O número secreto é... ", theNumber);

// Display the number in the HTML (Small number and big number)
let small_number_element = document.getElementById("small_number");
let big_number_element = document.getElementById("big_value");

small_number_element.innerHTML = small_value;
big_number_element.innerHTML = big_value;

// END FASE 1

// FASE 2

// Web Speech API
let try_element = document.getElementById("try");
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
  let tryUser = e.results[0][0].transcript;
  showTryUser(tryUser);
  verifyNumber(tryUser);
}

function showTryUser(tryUser){
  try_element.innerHTML = `
    <div>Você disse:</div>
        <span class="box" id="box">${tryUser}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());

// END FASE 2

// FASE 3

function verifyNumber(tryUser){
  let number = +tryUser;

  if(tryInvalid(number)){
    try_element.innerHTML = `
      <div>Valor inválido</div>`
    return;
  }

  if(numberBigerorSmaller(number)){
    try_element.innerHTML = `
    <div>Valor inválido: Fale um número entre ${small_value} e ${big_value}</div>`
    return;
  }

  if(number == this.theNumber){
    document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${this.theNumber}</h3>

            <button class="play-again" id="play-again">Jogar novamente</button>
        `
  } else if(number > this.theNumber){
    try_element.innerHTML = `
    <div>Você disse:</div>
        <span class="box" id="box">${tryUser}</span>
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  } else{
    try_element.innerHTML = `
    <div>Você disse:</div>
    <span class="box" id="box">${tryUser}</span>
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
  }
}

function tryInvalid(number){
  return Number.isNaN(number);
}

function numberBigerorSmaller(number){
  return number < small_value || number > big_value;
}

// END FASE 3

// FASE 4
document.body.addEventListener('click', function(e){
  if(e.target.id == 'play-again'){
    window.location.reload();
  }
})

// END FASE 4
