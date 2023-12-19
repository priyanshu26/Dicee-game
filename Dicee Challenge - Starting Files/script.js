let user1 = Math.floor(Math.random()*6)+1;
let user2 = Math.floor(Math.random()*6)+1;


if(user1 === 1){
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice1.png");
}else if(user1 === 2){
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice2.png");
}else if(user1 === 3){
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice3.png");
}else if(user1 === 4){
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice4.png");
}else if(user1 === 5){
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice5.png");
}else{
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice6.png");
}


if(user2 === 1){
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice1.png");
}else if(user2 === 2){
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice2.png");
}else if(user2 === 3){
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice3.png");
}else if(user2 === 4){
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice4.png");
}else if(user2 === 5){
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice5.png");
}else{
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice6.png");
}

if(user1 > user2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
}else if(user2 > user1){
    document.querySelector("h1").innerHTML = "Player 2 Win 🚩!";
}else {
    document.querySelector("h1").innerHTML = "Draw 🤝!";
}