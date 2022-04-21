let menu1=document.getElementsByClassName("block1_description") [0]
let menu2=document.getElementsByClassName("block2_description")[0]
let menu3=document.getElementsByClassName("block3_description")[0]

function menu1_zoom(){
    menu1.style.display="flex"
    menu1.style.display="100%"
    menu2.style.display="none"
    menu3.style.display="none"
}

function menu2_zoom(){
    menu2.style.display="flex"
    menu2.style.display="100%"
    menu1.style.display="none"
    menu3.style.display="none"
}

function menu3_zoom(){
    menu3.style.display="flex"
    menu3.style.display="100%"
    menu2.style.display="none"
    menu1.style.display="none"
}



var array = document.querySelectorAll(".buttons p");
toggleClass = function () {
     for (var j = 0; j < array.length; j++) {
         array[j].classList.remove('h1');
         this.classList.add('h1');
         }
};
 
for (var j = 0; j < array.length; j++) {
     array[j].addEventListener('click', toggleClass);
}