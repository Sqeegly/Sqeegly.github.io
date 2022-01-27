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
    let hungerMeter =document.getElementById("hunger-meter");
hungerMeter.value = hunger;

let hungerParagraph = document.getElementById("hunger-paragraph");
hungerParagraph.innerHTML = hunger;
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
        refreshUII()
    }
function killpet() {
    console.log("Pet killing...");
    if (bloodthirst > 0) {
        bloodthirst = bloodthirst - 1;
    }
    console.log("bloodthirst: " + bloodthirst);
    
    refreshUII();
}



function refreshUII() {
    let bloodthirstMeter =document.getElementById("bloodthirst-meter");
bloodthirstMeter.value = bloodthirst;

let bloodthirstParagraph = document.getElementById("bloodthirst-paragraph");
bloodthirstParagraph.innerHTML = bloodthirst;
}

let petTimer = setInterval(deupPet, 1000);
let petLower = setInterval(petup, 1000);
