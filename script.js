const hamburger = document.getElementById("hamburger");
const closebtn = document.getElementById("closebtn");
const mySidenav = document.getElementById("mySidenav");

hamburger.addEventListener('click', () => {
mySidenav.style.width = "100%" ;
});

closebtn.addEventListener('click', () => {
    mySidenav.style.width = "0%" ;
});


function validateName() {
    const name = document.getElementById("name").value;

    if(name.length == 0) {
        producePrompt('Name is required', 'name-error', 'red')
        return false;
    } else {
        producePrompt('', 'name-error', 'green');
        return true
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;

    if(email.length == 0) {
        producePrompt('Email Invaild', 'email-error', 'red');
        return false;
    } else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        producePrompt('Email Invalid', 'email-error', 'red');
        return false;   
    } else {
        producePrompt('', 'email-error', 'green');
        return true
    }
}

function validateMessage() {
    const message = document.getElementById('contact-message').value;
    const required = 30;
    const left = required - message.length;
  
    if (left > 0) {
      producePrompt(left + ' more characters required','message-error','red');
      return false;
  } else {
      producePrompt('Valid', 'message-error', 'green');
      return true;
  }
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
      jsShow('submit-error');
      producePrompt('Please fix errors to submit.', 'submit-error', 'red');
      setTimeout(function(){jsHide('submit-error');}, 2000);
      return false;
  }
  else {
  
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
  
  }