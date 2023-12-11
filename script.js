 let pass = document.getElementById('password');
 let confirmPass = document.getElementById('confirm-password');
 let passErrMsg = document.getElementById('passErrorMsg');

 let checkPass = () => {
    if(pass.value !== confirmPass.value){
        passErrMsg.classList.add("passError");
        passErrMsg.innerHTML = '* Passwords do not match';
    } else {
        passErrMsg.classList.remove("passError");
        passErrMsg.innerHTML = '';
    }
 }