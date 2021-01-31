function validateForm() {
    
   var x=document.forms['form']['name'].value;
   if (x == "") {
    alert("Your name must be filled out");
    return false;
   }

   var y=document.forms['form']['address'].value;
   if (y == "") {
     alert("Your address must be filled out");
    return false;
    }

   var z=document.forms['form']['phone'].value;
   if (z == "") {
      alert("Your phone must be filled out");
    return false;
   }
}