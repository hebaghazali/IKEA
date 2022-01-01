var arrowL = document.getElementById("slide-arrow-left");
var arrowR = document.getElementById("slide-arrow-right");
var box = document.getElementsByClassName("box");
var card = document.getElementsByClassName("card");

console.log(card);
arrowR.addEventListener("click",function () {

    console.log("helllllllllllllllo");
for(var i =0; i < card.length; i++){

    console.log(card[i]);
    
    if(i < 5){
      
      box.innerHTML = card[i]
      i++
    }
 
}
})

