var pickUp = document.forms[0]['pick-up'];
var drop = document.forms[0]['drop'];
var locationError = document.getElementById('location');
document.querySelectorAll('input').forEach(e=>{
    e.addEventListener('keyup',function(){
        locationError.innerHTML="";
        if(pickUp.value !="" && drop.value != "")
        {
    
            if(pickUp.value == drop.value)
            {
                locationError.innerHTML='pick up and drop location are same';
            }
        }
    })
})