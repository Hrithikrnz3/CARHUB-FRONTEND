var password = document.forms[0]['password'];
var cpassword = document.forms[0]['cpassword'];
var passError = document.getElementById('cpass-error');

document.querySelectorAll('input').forEach(e=>{
    e.addEventListener('keyup',function(){
        passError.innerHTML="";
        if(password.value != "" && cpassword.value != ""){
            if(password.value == cpassword.value){
                passError.innerHTML="correct password";
            }
        }
        
    })
})
