let randomNumber;

// function for dice randomizer
function diceRoll() {
    randomNumber = Math.floor(Math.random() * 6) + 1; // number generated, 1-6

    let d6Images = "images/d60" + randomNumber + ".png"; // ramdom number attached to image

    document.querySelector(".d6").setAttribute("src", d6Images); // image displayed
}

// function to roll the dice (called when button clicked)
function clickRoll() {
    const diceSound = new Audio("sound/diceSound.mp3");
    diceSound.play();
    let counter = 0;
    let clickRollInterval = setInterval(function () {
        if (counter < 9) {
            diceRoll();
            counter++;
            console.log(counter);
        } else {
            clearInterval(clickRollInterval);
            counter = 0;
            document.querySelector(
                "p"
            ).innerHTML = `You rolled a ${randomNumber}!`;
        }
    }, 80);
}
