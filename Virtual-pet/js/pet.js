let bloodthirst = 10;
let hunger = 0;

function feedpet() {
    console.log("Feeding pet...");
    if (hunger < 10) {
        hunger = hunger + 1;
    }
    console.log("hunger: " + hunger);
    
    refreshUI();
}
function refreshUI() {
    //hunger
    let hungerMeter =document.getElementById("hunger-meter");
hungerMeter.value = hunger;
let hungerParagraph = document.getElementById("hunger-paragraph");
hungerParagraph.innerHTML = hunger;
//bloodthirst
let bloodthirstMeter =document.getElementById("bloodthirst-meter");
bloodthirstMeter.value = bloodthirst;

let bloodthirstParagraph = document.getElementById("bloodthirst-paragraph");
bloodthirstParagraph.innerHTML = bloodthirst;

//image changer
let petImg = document.getElementById("pet-img")
let petParagraph = document.getElementById("pet-condition")
if (bloodthirst === 10 && hunger === 0) {
petImg.src = "images/kill.jpg";
petParagraph.innerHTML = "Youre looking rather...sus!";

} else if (hunger <=5 && bloodthirst >= 6) {
    petImg.src = "images/imposterhunger.jfif"
    petParagraph.innerHTML = "Im so hungry..."
}
else {
    petImg.src = "images/among-us-6008615__480.png";
    petParagraph.innerHTML = "Im fine.";
}
}




function deupPet() {
    if (hunger > 0) {
    hunger -=1;
    }
    
    refreshUI()
}
function petup() {
        if (bloodthirst < 10) {
            bloodthirst +=1
        }
        refreshUI()
    }
function killpet() {
    console.log("Pet killing...");
    if (bloodthirst > 0) {
        bloodthirst = bloodthirst - 1;
    }
    console.log("bloodthirst: " + bloodthirst);
    
    refreshUI();
}




let petTimer = setInterval(deupPet, 1000);
let petLower = setInterval(petup, 1000);


