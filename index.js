//timer fields
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
let mainTimer = document.getElementById('section');

//buttons
const playtButton = document.querySelector('.play');
const newTimertButton = document.querySelector('.newTimer');
const speakerNonetButton = document.querySelector('.speakerNone');
const deleteTimerButton = document.querySelector('.deleteTimer');
const switchModeButton = document.querySelector('.switchMode');

//listeners
playtButton.addEventListener('click', () => {
    clearInterval(interval)
    onClickStarter()
})
newTimertButton.addEventListener('click', () => {
    let newTimer = mainTimer.cloneNode(true);
    console.log(newTimer)
    document.body.appendChild(newTimer);                  /*Как активировать кнопки у новых таймеров?*/
})
deleteTimerButton.addEventListener('click', () => {
    document.body.removeChild(mainTimer)
})
switchModeButton.addEventListener('click', () => {
    onClickMode()
})

//vars
let minutes = 0,
    seconds = 0,
    interval,
    isOnPlay,
    isOnPause,
    isOnStop,
    isOnBlack,
    isOnWhite;

isOnBlack = true

// Кнопки Старт, Пауза, Стоп

function clearFields() {
    minutes = 0;
    seconds = 0;
    secondsElement.innerText = '00'
    minutesElement.innerText = '00'
}

function startTimer() {
    isOnPlay = true
    playtButton.style.backgroundImage = 'url(./assets/ph_pause-circle.svg)'
    playtButton.style.border = 'none'
    seconds++
    if(seconds < 10) {
        secondsElement.innerText = '0' + seconds
    }
    if(seconds > 9) {
        secondsElement.innerText = seconds
    }
     if(seconds > 59) {
        minutes++
        minutesElement.innerText = '0' + minutes
        seconds = 0
        secondsElement.innerText = '0' + seconds
    }
    if(minutes < 10) {
        minutesElement.innerText = '0' + minutes
    }
    if(minutes > 9) {
        minutesElement.innerText = minutes
    }
}

function pauseTimer() {
        isOnPause = true
        clearInterval(interval)
        playtButton.style.backgroundImage = 'url(./assets/ph_stop-circle.svg)'
}

function stopTimer() {
        isOnStop = true
        clearInterval(interval)
        clearFields()
        playtButton.style.backgroundImage = 'url(./assets/ph_play-circle.svg)'
}

function onClickStarter() {
     if(isOnPlay) {                    
        pauseTimer()
        isOnPlay = false
        return
    }
    if(isOnPause) {                     
        stopTimer()
        isOnPause = false
        return
    }
    interval = setInterval(startTimer, 1000)
    return 
}

 // Переключение темы

function whiteMode() {
    document.body.style.backgroundColor = 'white';
    switchModeButton.style.background = 'url(./assets/ph_moon-bold.svg) no-repeat white';
    minutesElement.style.color = 'black';
    secondsElement.style.color = 'black';
    document.querySelector('.timer').children[1].style.color = 'black';
    isOnWhite = true
}
function blackMode() {
    document.body.style.backgroundColor = 'black';
    switchModeButton.style.background = 'url(./assets/ph_sun-bold.svg) no-repeat black';
    minutesElement.style.color = 'white';
    secondsElement.style.color = 'white';
    document.querySelector('.timer').children[1].style.color = 'white';
    isOnBlack = true
}

function onClickMode() {
    if(isOnBlack) {
        whiteMode()
        isOnBlack = false
        return
    }
    blackMode()
    isOnWhite = false
    return
}






