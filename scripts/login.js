var email = document.forms[0]['email'];
var password = document.forms[0]['password'];
var btnlogin = document.getElementById('signin');
var error = document.getElementById('error-messages');
var passerror = document.getElementById('pass-error-messages');
var isValid = true;
const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )
const passRegexp = new RegExp(
    /(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&@\?].*).{8,}/
  )

document.querySelectorAll('input').forEach(e => {
  e.addEventListener('keyup', function(){
    console.log('trigger')
    error.innerHTML = "";
    passerror.innerHTML = "";
    isValid = true;
    if(!emailRegexp.test(email.value))
      {
        error.innerHTML = 'Please enter a valid email';
        // alert(1);  
        btnlogin.setAttribute('disabled',true);
        //alert(6);
        isValid = false;
      }

      if(!passRegexp.test(password.value))
        {
          passerror.innerHTML = 'Please enter a valid password';
          btnlogin.setAttribute("disabled",true);
          isValid = false;

        }
        
        console.log('isvalid '+isValid);
      if(isValid)
        {
          // console.log('hai')
          btnlogin.removeAttribute("disabled");

        }
        else{
          btnlogin.setAttribute('disabled', true);
        }

  })
});




