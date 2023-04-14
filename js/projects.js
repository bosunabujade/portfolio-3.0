const filterDiv = document.getElementsByClassName("filterDiv");
const tagFilter = document.getElementById("tag-filter");
const tagBtns = tagFilter.getElementsByClassName("tag-btn");
const hamburger = document.getElementById("hamburger");
const closebtn = document.getElementById("closebtn");
const sidenav = document.getElementById("sidenav");


filterSelection("all")
function filterSelection(tag) {
  if (tag == "all") {
    for (let i = 0; i < filterDiv.length; i++) {
    filterDiv[i].style.display = "flex";
}} else {
    for (let i = 0; i < filterDiv.length; i++) {
        filterDiv[i].style.display = "none";
        if (filterDiv[i].className.includes(tag)) {
            filterDiv[i].style.display = "flex"
        }
        }
    }
tag
}

for (let i = 0; i < tagBtns.length; i++) {
  tagBtns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

hamburger.addEventListener('click', () => {
    sidenav.style.width = "100%";
    sidenav.style.zIndex = 2;
});

closebtn.addEventListener('click', () => {
    sidenav.style.width = "0%" ;
    sidenav.style.zIndex = -1;

});