


//image 1

var randomno1 = Math.floor(Math.random() * 6)+1;

var randomimagesource = "images/dice"+ randomno1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);

//image2

var randomno2 = Math.floor(Math.random()*6)+1;

var randomimagesource2 = "images/dice" + randomno2 + ".png";

document.querySelectorAll("img")[01].setAttribute("src",randomimagesource2);


//if player 1 wins

if(randomno1 > randomno2) {
    document.querySelector("h1").innerHTML = "mailey jiteh";

    let count = 0;
const countElement = document.getElementById('count');
function updateCount() {
    count++;
    countElement.textContent = count;
  }

    updateCount();

    
} else if (randomno2>randomno1) {
    document.querySelector("h1").innerHTML = "tailey jitis bby ";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

