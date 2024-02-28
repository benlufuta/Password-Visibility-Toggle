// This function selects the reveal icon, password input field, and message elements.
// It also sets a timer to hide the message after 10 seconds.
const revealIcon = document.querySelector('img');
const password = document.querySelector('input');
const message = document.querySelector('h3');
const messageElement = document.getElementById('message');

// Show the message initially
messageElement.style.display = 'block';

// Set a timer to hide the message after 10 seconds
setTimeout(function() {
  messageElement.style.display = 'none';
}, 10000); // 10000 milliseconds = 10 seconds

// This event listener toggles password visibility when the reveal icon is clicked.
revealIcon.addEventListener('click', ()=>{

    if (password.type === 'password') {
        
        password.type = 'text';
        revealIcon.src = '/images/showIcon.png';

    } else {

        password.type = 'password';
        revealIcon.src = '/images/hideIcon.png';
    }
} )

// This function checks the strength of the password and updates the message accordingly.
function checkPasswordStrength(){
    
    password.addEventListener('blur', function(event) {

        if (password.value.length === 0) {
            
            message.innerText = 'You must type in something!';
            message.style.color = 'black';

    }   else if (password.value.length < 8){

            message.innerText = 'Weak Password';
            message.style.color = 'red';

        } else if (password.value.length >= 8 && password.value.length < 12){

           if ( containsNumber(password.value) !== true) {
            
            message.innerText = 'Moderate Password';
            message.style.color = 'yellowgreen';

           }

        } else {

            if (containsPunctuation(password.value) === true && containsNumber(password.value) === true) {

                message.innerText = 'Strong Password';
                message.style.color = 'green';

            } else {

                message.innerText = 'Moderate Password';
                message.style.color = 'yellowgreen';
            }
            
        }

    })
    
}

// This function checks if a word contains a number.
function containsNumber(word) {
    return /\d/.test(word);
  }

// This function checks if a word contains punctuation.
function containsPunctuation(word) {

    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~$&@#]/;

    return regex.test(word);
  }

// Call the function to start checking password strength.
checkPasswordStrength();
