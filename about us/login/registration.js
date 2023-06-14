function checkPassword(){
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    console.log("password,confirmpassword");
    let message = document.getElementById("message");
    if (password.length !=0){
        if (password==confirmpassword){
            message.textContent = "Passwords match";
        }
        else{
            message.textContent = "Passwords don't match";
        }
    }else{
        alert("password can't be empty!");
        message.textContent = "";
    }
}
