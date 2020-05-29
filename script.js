console.log("i'm working here okay!")
const form = document.getElementById('form');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})


function checkInputs() {
    TODO://get the value of the inputs
    var firstNameValue =  firstName.value.trim();
    var lastNameValue =  lastName.value.trim();
    var emailValue =  email.value.trim();
    var passwordValue =  password.value.trim();

    // check first name 
    if(firstNameValue === ''){
        setErrorFor(firstName, 'First name cannot be empty');
    }else{
        // return normal
        return;
    }

    // check last name 
    if(lastNameValue === ''){
        setErrorFor(lastName, 'Last name cannot be empty');
    }else{
        // return normal
        return;
    }

    // check email
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isValidEmail(emailValue)){
        setErrorFor(email, 'Looks like this is not an email')
    }else{
        return;
    }

    // check password
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }else if(!isValidPassword(passwordValue)){
        setErrorFor(password,'at least 1 number, 1 uppercase and 1 lowercase letter. Also atleast 6 letters. sorry')
    }else{
        return;
    }
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;

    formControl.className = 'form-control error';
}


function setSuccessFor(input){
     const formControl = input.parentElement;
     formControl.className = 'form-control'
}

function isValidEmail (email){
    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//TODO: create a function to handle password validation;
function isValidPassword (password){
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
}



















