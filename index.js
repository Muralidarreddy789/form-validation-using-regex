const form=document.querySelector('.form');
const button=document.querySelector('.btn');
const errormessages=document.querySelectorAll('.errormessage');
const emptyfields=document.querySelectorAll('.emptyfield');
const showPassword=document.querySelector('#togglePassword')
let firstName,lastName,email,password;
let firstEvent,lastEvent,emailEvent,passwordEvent;
passwordEvent=document.querySelector('.password-img');
let firstflag,lastflag,emailflag,passwordflag;

//removing default error message

for(let errormessage of errormessages)
{
    errormessage.classList.add('displayNone');
}

for(let emptyfield of emptyfields)
{
    emptyfield.classList.add('displayNone');
}

//regular expressions for validating name email password

const nameRegex=/^[a-zA-Z'-]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*()_+[\]{}|;:',.<>?])(?=.*[a-zA-Z]).{8,}$/;



form.addEventListener('keyup',(event)=>{
    const field=event.target.dataset.key;
    switch(field)
    {
        case "firstName":
            firstName=event.target.value;
            firstEvent=event.target;
            break;
        case "lastName":
            lastName=event.target.value;
            lastEvent=event.target;
            break;
        case "email":
            email=event.target.value;
            emailEvent=event.target;
            break;
        case "password":
            password=event.target.value;
            passwordEvent=event.target;
            break;
        default:
            firstName=lastName=email=password="";
            break
    }

});

button.addEventListener('click',(event)=>{
    event.preventDefault();

    if(firstName)
    {
        if(nameRegex.test(firstName))
        {
            errormessages[0].classList.add('displayNone');
            firstEvent.classList.remove('error')
            firstflag=true;
        }
        else{
            errormessages[0].classList.remove('displayNone');
            firstEvent.classList.add('error')
            firstflag=false;
        }
        emptyfields[0].classList.add('displayNone');
    }else{
        emptyfields[0].classList.remove('displayNone');
        firstflag=false
    }
    
    if(lastName)
    {
        if(nameRegex.test(lastName))
        {
            errormessages[1].classList.add('displayNone');
            lastEvent.classList.remove('error');
            lastflag=true;
        }
        else{
            errormessages[1].classList.remove('displayNone');
            lastEvent.classList.add('error');
            lastflag=false;
        }
        emptyfields[1].classList.add('displayNone');
    }else{
        emptyfields[1].classList.remove('displayNone');
        lastflag=false;
    }
    
    if(email)
    {
        if(emailRegex.test(email))
        {
            errormessages[2].classList.add('displayNone');
            emailEvent.classList.remove('error');
            emailflag=true;
        }
        else{
            errormessages[2].classList.remove('displayNone');
            emailEvent.classList.add('error');
            emailflag=false;
        }
        emptyfields[2].classList.add('displayNone');
    }else{
        emptyfields[2].classList.remove('displayNone');
        emailflag=false;
    }
    
    if(password)
    {
        if(passwordRegex.test(password))
        {
            errormessages[3].classList.add('displayNone');
            passwordEvent.classList.remove('error');
            passwordflag=true;
        }
        else{
            errormessages[3].classList.remove('displayNone');
            passwordEvent.classList.add('error');
            passwordflag=false;
        }
        emptyfields[3].classList.add('displayNone');
    }else{
        emptyfields[3].classList.remove('displayNone');
        passwordflag=false;
    }
    if(firstflag && lastflag && emailflag && passwordflag)
    {
        firstEvent.value=lastEvent.value=emailEvent.value=passwordEvent.value="";
        window.location.href="https://muralidarreddy789.github.io/success"
    }
    
});

showPassword.addEventListener('click',(event)=>{
    event.preventDefault();
    if(passwordEvent.getAttribute('type')==='password')
    {
        passwordEvent.setAttribute('type','text');
    }
    else{
        passwordEvent.setAttribute('type','password');
    }
    showPassword.classList.toggle('bi-eye');
})
