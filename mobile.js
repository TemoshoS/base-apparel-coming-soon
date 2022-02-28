function validateEmail()
{
    var text = document.getElementById("email").value;
    var reg = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/

    
    if(reg.test(text)==false)
    {

       document.getElementById("alert").innerHTML = "Please provide a valid email";
       document.getElementById("alert").style.color = "red";
       
       document.getElementById("buttonj").style.backgroundColor = "#FFE4E1";
        
       
       document.getElementById("inputjs").style.border = "1px solid red";
       document.getElementById("inputjs").style.borderRadius = "25px";
       
       
       document.getElementById("addImage").src = "./images/icon-error.svg";

       
    }
   
}