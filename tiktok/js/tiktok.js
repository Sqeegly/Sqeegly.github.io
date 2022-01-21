// tiktok's magic algorithm
// TODO: tweak algorith
// add at least two more new parameters
function magicAlgorithm(numLikes, comment, shares, tags) {
    let rank = 0;
    // magic!
    if (numLikes >= 10000 && comment.includes("best") && shares >= 5000 && tags >= 100) {
        rank = 1;
    } else if (numLikes >= 500 && comment.includes("amazing") && shares >= 1000 && tags >= 20) {
        rank = 1000;
    } else {
        rank = 10000;
    }
    return rank;
}
function popup() {
    alert("Welcome to Tiktok! Imagine I'm showing you a tiktok video right now");
    let likeCount = Number(prompt("How many likes did this Tiktok video get?"));
    let comment = prompt("What is the most recent comment for this video?");
    let numshares = prompt("how many shares did this video get?");
    let numtags = prompt("how many people are tagged?");
    let rankResult = magicAlgorithm(likeCount, comment, numshares, numtags);
    let resultString = "Based off of the magic algorithm, this video's rank is: " + rankResult;
    alert(resultString);

}

function showUI() {

let likeCount = Number(document.getElementById("like-textbox").value);

let comment = document.getElementById("comment-textbox").value;

let rankResult = magicAlgorithm(likeCount, comment, 1000, 10);

document.getElementById("result-paragraph").innerHTML = "Tiktok Rank: " + rankResult;

}