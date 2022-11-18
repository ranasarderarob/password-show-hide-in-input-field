const password = document.querySelector(".form .field input[type='password']"),
toggleButton = document.querySelector(".form .field i");

toggleButton.onclick = ()=>{
    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}
