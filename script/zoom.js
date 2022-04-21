let text_zoom1 = document.getElementsByClassName("block1_description")[0]
let text = document.getElementsByClassName("text123")[0]

function openButton1() {
text_zoom1.style.opacity = "1";
text_zoom1.style.width = "350px";
setTimeout(() => text.style.opacity = "1", 200) 
}

function closeButton1() {
text.style.opacity = "0"
text_zoom1.style.width = "0";
}