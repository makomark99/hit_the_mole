
const score = document.querySelector(".score");
const divs = document.querySelectorAll(".divs");
const button = document.querySelector(".button");
const timeLeft = document.querySelector(".timeleft");



button.addEventListener("click", (e) => {
    button.disabled = true;
    let currentTime = 10;
    let points = 0;
    const startGame = setInterval(() => {
        let mole;
        let randomNum;
        let randomTime;
        randomNum = Math.floor(Math.random() * 9);
        mole = divs[randomNum];
        let image = document.createElement("img");
        image.className = 'mole';
        mole.appendChild(image);
        image.onclick = function () {
            points++;
            score.textContent = points;
            //mole.removeChild(image);
        }
        randomTime = Math.floor(Math.random() * 1000) + 190;
        setTimeout(() => {
           
                mole.removeChild(image);
            
        }, randomTime);
    }, 1200);
    function countDown() {
        currentTime--;
        timeLeft.textContent = currentTime;

        if (currentTime == 0) {
            clearInterval(countDownTimerId);
            clearInterval(startGame);
            alert('Játék vége, végső pontszámod: ' + points);
        }

    }
    let countDownTimerId = setInterval(countDown, 1000);

});


/*let hitPosition;
let result;
let currentTime = 30;
button.addEventListener('click', () => {
    function randomDiv() {
        divs.forEach(div => {
            div.classList.remove('divs');
        });
        let randomDiv = divs[Math.floor(Math.random() * 9)];
        randomDiv.classList.add('mole');
        hitPosition = randomDiv.id;
    }


    divs.forEach(div => {
        div.addEventListener('mousedown', () => {
            if (div.id == hitPosition) {
                result++;
                score.textContent = result;
                hitPosition = null;
            }
        });
    });

    function moveMole() {
        timerId = setInterval(randomDiv, 500)
    }

    moveMole();

    function countDown() {
        currentTime--;
        timeLeft.textContent = currentTime;

        if (currentTime == 0) {
            clearInterval(countDownTimerId);
            clearInterval(timerId);
            alert('GAME OVER! Your final score is ' + result);
        }

    }

    let countDownTimerId = setInterval(countDown, 1000)
});
*/
/*

*/




/*const score = document.querySelector('.score');
const divs = document.querySelectorAll('.divs');
let points = 0;
let randomTime;
let randomSzam;
let mole;

window.addEventListener("click", () => {
    let startGame = setInterval(() => {
        randomTime = Math.floor(Math.random() * 700) + 100;
        randomSzam = Math.floor(Math.random() * 9);
        mole = document.createElement('img');
        mole.className = 'mole';
        divs[randomSzam].appendChild(mole);
        setTimeout(() => {
            divs[randomSzam].removeChild(mole);
        }, 600);
    }, randomTime)
    window.addEventListener("click", (e) => {
        if (e.target === divs[randomSzam]) score.innerText = ++points;
        else clearInterval(startGame); score.innerHTML = 0;
    });
});
*/