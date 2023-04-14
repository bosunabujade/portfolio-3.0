const hamburger = document.getElementById("hamburger");
const closebtn = document.getElementById("closebtn");
const sidenav = document.getElementById("sidenav");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


hamburger.addEventListener('click', () => {
sidenav.style.width = "100%";
sidenav.style.zIndex = 2;
});

closebtn.addEventListener('click', () => {
    sidenav.style.width = "0%" ;
    sidenav.style.zIndex = -1;

});

let slideIndex = 1;
showSlides(slideIndex);

prev.addEventListener('click', () => {
    plusSlides(-1)
})

next.addEventListener('click', () => {
    plusSlides(1)
})

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  

function showSlides(n) {
    let slides = document.getElementsByClassName("project-box");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}



function validateName() {
    const name = document.getElementById("name").value;

    if(name.length == 0) {
        producePrompt('Name is Required', 'name-error', '#8B0000')
        return false;
    } else {
        producePrompt('', 'name-error', 'green');
        return true
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;

    if(email.length == 0) {
        producePrompt('Email Invaild', 'email-error', '#8B0000');
        return false;
    } else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        producePrompt('Email Invalid', 'email-error', '#8B0000');
        return false;   
    } else {
        producePrompt('', 'email-error', 'green');
        return true
    }
}

function validateMessage() {
    const message = document.getElementById('message').value;
    const required = 30;
    const left = required - message.length;
  
    if (left > 0) {
      producePrompt(left + ' more characters required','message-error','#8B0000');
      return false;
  } else {
      producePrompt('Valid', 'message-error', 'green');
      return true;
  }
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
      jsShow('submit-error');
      producePrompt('Please fix errors to submit.', 'submit-error', '#8B0000');
      setTimeout(function(){jsHide('submit-error');}, 4000);
      return false;
  }
  else {
    let name = document.getElementById("name").value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    document.location.href ="mailto:bosunabujade@gmail.com?subject=" + encodeURIComponent(name) + ", " + encodeURIComponent(email) + "&body=" +encodeURIComponent(message);
}
}

  
  function jsShow(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  
  function jsHide(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  
  function producePrompt(message, promptLocation, color) {
  
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
    document.getElementById(promptLocation).style.fontSize = ".7rem";
    document.getElementById(promptLocation).style.fontWeight = "600";
    document.getElementById(promptLocation).style.textTransform = "uppercase";
    document.getElementById(promptLocation).style.marginTop = "10px";
  }

