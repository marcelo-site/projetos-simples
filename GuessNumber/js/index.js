const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)

var newStatus = document.getElementById('status')
let attempt = document.getElementById('attempt');
attempt
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumbers: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max)
    }
}
let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = `Tentativa: ${value}`
}

function handleSubmit(e){
    e.preventDefault();
    let kick = document.getElementById('kick').value;
    if(!kick){
        alert('Digite um número!')
        return;
    };

    updateAttempt(attempt, ++Guess.attemptsNumbers);

    if(numberDrawn == kick){
        playAgain();
        newStatus.innerHTML = 'Parabéns. você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        newStatus.style.color= '#fff';
        clear();
    } else if( numberDrawn > kick) {
        newStatus.innerHTML='O número é maior!';
        newStatus.style.color = '#de4251';
        clear();
    } else if( numberDrawn < kick){
        newStatus.innerHTML='O número é menor!';
        newStatus.style.color = '#de4251';
        clear();
    }
};

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
}

function restart() {
    document.location.reload(true);
}

function clear(){
    document.getElementById('kick').value = '';
}
console.log(Guess.value)