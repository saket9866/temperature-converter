document.getElementById('convert').onclick = converttemperature;
function converttemperature() {
    var x= document.getElementById('input').value;
    var y= document.getElementById('output').value;
    var cab=document.getElementById('ivalue').value;
    
    const a=x;
    const b=y;
     var d;
    cab = parseFloat(cab);

    if (a == "f" && b=="k") {
        d=  ((cab-32)/1.8)+273.15;
      } else if (a=="f" && b=="c") {
         d= (cab-32)/1.8;
        
      } else if(a="f" && b=="f") {
         d= cab;
        
      } else if (a=="k" && b=="f") {
         d= ((cab-273.15)*1.8)+32;
        
      }
      else if (a=="k" && b=="c") {
         d=  cab-273.15;
        
      } else if (a=="k" && b=="k") {
        d = cab ;
      } else if (a=="c" && b=="f"){
         d= (cab*1.8)+32;
      } else if (a=="c" && b=="k") {
         d = cab+273.15;
        
      } else if(a=="" && b==""){
        d="Select the temperature unit"
      }else{
        d= "Enter correct combination";
      }

document.getElementById('fvalue').innerHTML= d;

    }
    function reset() {
      document.getElementById('input').value="";
      document.getElementById('ivalue').value="";
      document.getElementById('output').value="";
    }
    