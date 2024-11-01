let input = document.querySelector('input');
let input_2 = document.querySelector('.input-2');
let inputBox = document.querySelector('.input-box');
let guessBox = document.querySelector('.guess-box');
let hind = document.querySelector('.hind');
let attampBox = document.querySelector('.attamp');

let guessedNumber = [];
let randomNumber = 0;
let attamp = 0;

function startBtn() {
    document.querySelector('.deficuilty').innerHTML = 'Game Started';

    document.querySelector('.input-box-2').style.display = 'flex';
    let transfarInput = input.value.toLowerCase();

    if (transfarInput == 'easy') {
        guessBox.classList.add('show-game-fild');
        inputBox.innerHTML = `<h1>${transfarInput}</h1>`;

        input_2.setAttribute('placeholder', 'Chose a number 1 to 10 .');

        randomNumber = Math.floor(Math.random() * 10 + 1);
        document.title = 'Easy';

        attamp = 5;

    } else if (transfarInput == 'medium') {
        guessBox.classList.add('show-game-fild');
        inputBox.innerHTML = `<h1>${transfarInput}</h1>`


        input_2.setAttribute('placeholder', 'Chose a number 1 to 100 .');

        randomNumber = Math.floor(Math.random() * 100 + 1);
        document.title = 'Medium';

        attamp = 7;
    } else if (transfarInput == 'hard') {
        inputBox.innerHTML = `<h1>${transfarInput}</h1>`
        guessBox.classList.add('show-game-fild');

        input_2.setAttribute('placeholder', 'Chose a number 1 to 1000 .');

        randomNumber = Math.floor(Math.random() * 1000 + 1);

        document.title = 'Hard';

        attamp = 10;
    } else {
        alert('Choose Deficulity Under : Easy / Medium / Hard')

        return;
    }
    addResetBtn();

    attampBox.innerHTML = attamp;
    input.value = '';
    input_2.focus();
}

function addResetBtn() {
    let resetIcon = document.createElement('span');
    resetIcon.innerHTML = '<i class="fa-solid fa-rotate-right" onclick="resetPage()"></i>';
    guessBox.appendChild(resetIcon);
    console.log(randomNumber)
}
function resetPage() {
    location.reload();
}



input.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        startBtn();
    }
})

let checkAttamp = 0;

function checkNumber() {
    if (input_2.value == '') {
        alert('Choose a Number !')
    }
    else {
        attamp -= 1;
        checkAttamp += 1;
        if (attamp > 0) {
            if (randomNumber == input_2.value) {
                guessBox.innerHTML = `<h1 class="sucsses"><i class="fa-solid fa-heart"></i><span>Congratulation ! <br></span>You WIN in -${checkAttamp} attamp.</h1>`;
                addResetBtn();
                return;
            } else if (randomNumber < input_2.value) {
                hind.innerHTML = 'Your guessed number to HIGH !';

                removeHind()
            }
            else if (randomNumber > input_2.value) {
                hind.innerHTML = 'Your guessed number to LOW !';

                removeHind();
            }
        } else {
            guessBox.innerHTML = `<h1 class="error"><i class="fa-solid fa-heart-crack"></i><span>The Number Is -${randomNumber}.</span></h1>`;
            addResetBtn();
            return;
        }
        guessedNumber.push(input_2.value);
        document.querySelector('.numbers').innerHTML = guessedNumber;
        input_2.value = '';

        attampBox.innerHTML = attamp;
    }
}

function removeHind() {
    setTimeout(() => {
        hind.innerHTML = '';
    }, 3000);
}


input_2.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        checkNumber();
    }
})
