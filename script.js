const introStartBtn = document.getElementById("intro-start-btn")
const setGoalsBtn = document.getElementById("set-goals-btn");
const startTimerBtn = document.getElementById("start-timer-btn");


introStartBtn.addEventListener("click", () => {
    document.getElementById("intro-section").style.display = "none";
    document.getElementById("modal-background").style.display = "flex";
})

setGoalsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("modal-background").style.display = "none"
    document.getElementById("timer-section").style.display = "block"
    document.getElementById("goal-section").style.display = "block"
    document.getElementById("footer").style.display = "block";
})


startTimerBtn.addEventListener("click", ()=> {
    // countdownTime(25)
    populateGoalContainer()
})



let studyGoals = [];

function setStudyGoals(studyBlocks) {
    for (let i = 0; i < studyBlocks; i++) {
        studyGoals.push("study-block");
    }
}

setStudyGoals(6);


function populateGoalContainer() {
   studyGoals.map((item) => {
        if (item === "finished") {
            addTomato();
            } else if (item === "study-block") {
                addEmptyTomato();
            }
    })
}

function countdownTime(minutes) {
    const countdownTime = document.getElementById("countdown-time");
    let min = minutes;
    let seconds = 0;
    let secondsPlaceholder = "";
    let minutesPlaceholder = "";
    const countdownInterval = setInterval( ()=> {
        if (min > 0 && seconds === 0) {
            min--;
            if (min <= 10) {
                minutesPlaceholder = 0;
            }
            secondsPlaceholder = "";
            seconds += 59;
        } else if (min === 0 && seconds === 0) {
            clearInterval(countdownInterval);
        } else if (seconds <= 10) {
            secondsPlaceholder = 0;
            seconds--;
        } else {
            seconds--;
        }
        countdownTime.innerText = `${minutesPlaceholder}${min}:${secondsPlaceholder}${seconds}`;
    }, 1000);
}

function addTomato() {
    const tomatoContainer = document.getElementById("tomato-container");
    const tomatoIcon = document.createElement("img");
    tomatoIcon.setAttribute("src", "./images/tomato.png");
    tomatoIcon.className = "tomato-icon";
    tomatoContainer.appendChild(tomatoIcon)
}

function addEmptyTomato() {
    const tomatoContainer = document.getElementById("tomato-container");
    const emptyTomatoIcon = document.createElement("img");
    emptyTomatoIcon.setAttribute("src", "./images/empty-tomato.png");
    emptyTomatoIcon.className = "tomato-icon--empty";
    tomatoContainer.appendChild(emptyTomatoIcon)
}





