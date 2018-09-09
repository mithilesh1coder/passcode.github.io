var fname = document.getElementById('firstname');
var lname = document.getElementById('lastname');
var pin = document.getElementById('pincode');
var pos = document.getElementById('position');
var button = document.getElementById('btn1');

//variables
var code1;

button.addEventListener('click',retriveData);

function retriveData(){
    var fnameValue = fname.value;
    var lnameValue = lname.value;
    var pinValue = pin.value;
    var posValue = parseInt(pos.value);

    if(posValue>6){
        alert("PLease enter position less than 7");
        return;
    }

    //console.log(fnameValue,lnameValue,pinValue,posValue);
    if(fnameValue.length>lnameValue.length){
        var fcode = fnameValue.charAt(0);
        code1 = fcode+lnameValue;
    }else{
        var fcode = lnameValue.charAt(0);
        code1 = fcode+fnameValue;
    }
    
    var pinTraverse1 = pinValue.charAt(posValue-1)
    var pinTraverse2 = pinValue.charAt(pinValue.length-posValue);

    code1 = code1+pinTraverse1+pinTraverse2;

    var passcode = code1.replace(/([a-zA-Z])/g, function(a) {
        return String.fromCharCode(a.charCodeAt() ^ 32);
      })

      var out = document.querySelector('.output');
      out.innerHTML = ' <div class="result"><h3>Generated Password</h3><h6 class="alert alert-success">'+passcode+'</h6></div>';




}
