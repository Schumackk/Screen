let innerSubMenu = document.getElementsByClassName("submenu1")[0]
let outerSubMenu = document.getElementsByClassName("submenu3")[0]
let gamesSubMenu = document.getElementsByClassName("submenu2")[0]
let innerButton = document.getElementsByClassName("inner")[0]
let outerButton = document.getElementsByClassName("outer")[0]
let gamesButton = document.getElementsByClassName("games")[0]
closeInnerSubMenu()
closeOuterSubMenu()
closeGamesSubMenu()
function openInnerSubMenu() {
    innerSubMenu.style.visibility = "visible"
    innerSubMenu.style.opacity = "1"
    innerSubMenu.style.height = "50px"
    closeOuterSubMenu()
    closeGamesSubMenu()
}
function openOuterSubMenu() {
    outerSubMenu.style.visibility = "visible"
    outerSubMenu.style.opacity = "1"
    outerSubMenu.style.height = "50px"
    closeInnerSubMenu()
    closeGamesSubMenu()
}
function openGamesSubMenu() {
    gamesSubMenu.style.visibility = "visible"
    gamesSubMenu.style.opacity = "1"
    gamesSubMenu.style.height = "50px"
    closeInnerSubMenu()
    closeOuterSubMenu()
}
function closeInnerSubMenu() {
    innerSubMenu.style.height = "0px"
    innerSubMenu.style.opacity = "0"
    innerSubMenu.style.visibility = "hidden"
}
function closeOuterSubMenu() {
    outerSubMenu.style.height = "0px"
    outerSubMenu.style.opacity = "0"
    outerSubMenu.style.visibility = "hidden"
}
function closeGamesSubMenu() {
    gamesSubMenu.style.height = "0px"
    gamesSubMenu.style.opacity = "0"
    gamesSubMenu.style.visibility = "hidden"
}
