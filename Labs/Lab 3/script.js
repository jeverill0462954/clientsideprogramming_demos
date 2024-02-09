let score = 0;
let unlockedObjects = [];
const unlockThresholds = { planet: 10, rocket: 20, alien: 30, star: 50}; // Thresholds for unlocking objects

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object) {
    if (!unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        const objElement = document.getElementById(object);
        objElement.classList.add('unlocked');
        // this should only do anything for star
        objElement.style.display = "inline";
        objElement.onclick = function() {
            this.classList.toggle('enlarged');
        };
        alert(`Congratulations! You've unlocked the ${object}!`);
    }
}

function checkUnlockables() {
    Object.keys(unlockThresholds).forEach(object => {
        if (score >= unlockThresholds[object] && !unlockedObjects.includes(object)) {
            unlockObject(object);
        }
    });
}