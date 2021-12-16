//let number = 0;
//while (number <= 10) {
// console.log(number);
//   number = number + 1;

//let ten = 10;
//while (ten >= 0) {
// console.log(ten);
//  ten = ten - 1;


//}





let welcomeMsg = "Welcome to Among us! You must choose a location in the Skeld (1 or 2) to go to. ";
alert(welcomeMsg);

let continueGame = "y";


while (continueGame === "y") {
    // ask which room to enter?
    let playerChoice = prompt("Which location do you go to? (1 or 2)?");
    if (playerChoice === "1") {
        let playerAge = Number(prompt("how old are you?"));
        if (playerAge < 13) {
            alert("small enough to fit in the impostors mouth ");

        } else if (playerAge >= 14 && playerAge <= 17) {
            alert("Perfect age to perish!!");
        } else {
            alert("You get ejected! You were too sus...")
        }
        alert("Oh no! You went into cams and the impostor vented in and killed you! Better luck next time!");
        break;
    } else if (playerChoice === "2") {
        alert("You went into coms because it was sabotaged and luckily there were other players there too! You live.");
    } else {
        alert("Sorry you ran into a wall. Look better.");
    }
    let playerOption = prompt("You see the impostor vent into your room! Where do you run to? (1 or 2) ")
    if (playerOption === "1") {
        alert("You ran straight into Cafe and called an emergency meeting!! They believe your accusations and eject the impostor! You win.")
    } else if (playerOption === "2") {
        alert("You run into Reactor with nowhere to run. You get cornered by the impostor and die.")
    } else {
        alert("You trip over a space rock and shatter the glass on your spacesuit and puncture both of your eyeballs. Good job, youre blind now.")
    }

    continueGame = prompt("Would you like to play again (y/n)?");
}