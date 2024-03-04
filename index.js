//timer fields
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

//buttons
const playtButton = document.querySelector('.play');
const newTimertButton = document.querySelector('.newTimer');
const speakerNonetButton = document.querySelector('.speakerNone');

//listeners
playtButton.addEventListener('click', () => {
    clearInterval(interval)
    onClickStarter()
    // interval = setInterval(startTimer, 1000)
})


//vars
let minutes = 0,
    seconds = 0,
    interval,
    isOnPlay,
    isOnPause,
    isOnStop;

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
    if(seconds <= 9) {
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
    if(minutes <= 9) {
        minutesElement.innerText = '0' + minutes
    }
    if(minutes > 9) {
        minutesElement.innerText = minutes
    }
}

function pauseTimer() {
    playtButton.addEventListener('click', () => {
        isOnPause = true
        clearInterval(interval)
        playtButton.style.backgroundImage = 'url(./assets/ph_stop-circle.svg)'
    })
}

function stopTimer() {
    playtButton.addEventListener('click', () => {
        isOnStop = true
        clearInterval(interval)
        clearFields()
        playtButton.style.backgroundImage = 'url(./assets/ph_play-circle.svg)'
    })
}

function onClickStarter () {
     if(isOnPlay) {                    /*работает только при двойном клике*/
        pauseTimer()
        isOnPlay = false
    }
    if(isOnPause) {                      /*работает только при двойном клике*/
        stopTimer()
        isOnPause = false
    }
    if(isOnStop) {
        // return
                                            //КАК ЗАПУСТИТЬ ТАЙМЕР ЗАНОВО ПОСЛЕ ОТМЕНЫ?
    }
    interval = setInterval(startTimer, 1000)
}







