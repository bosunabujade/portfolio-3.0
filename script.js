const hamburger = document.getElementById("hamburger");
const closebtn = document.getElementById("closebtn");
const mySidenav = document.getElementById("mySidenav")


hamburger.addEventListener('click', () => {
mySidenav.style.width = "100%" ;
})

closebtn.addEventListener('click', () => {
    mySidenav.style.width = "0%" ;
})