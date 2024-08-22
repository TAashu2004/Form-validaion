function validation(){
    var user=document.getElementById("userr").value;
    var pass=document.getElementById("passs").value;
    var compass=document.getElementById("compas").value;
    var mobile=document.getElementById("fon").value;
    var mail=document.getElementById("maail").value;


    var put=document.getElementById("put").innerHTML="";
    var putt=document.getElementById("putt").innerHTML="";
    var puta=document.getElementById("puta").innerHTML="";
    var putc=document.getElementById("putc").innerHTML="";
    var putd=document.getElementById("putd").innerHTML="";
        if(user==""){
            document.getElementById("put").innerHTML="Write a valid Username";
            return false;
        }
        if(user.length<3){
            document.getElementById("put").innerHTML="Username is too Short";
            return false;
        }
        if(user.length>13){
            document.getElementById("put").innerHTML="Username is too long";
            return false;
        }
        if(!isNaN(user)){
            document.getElementById("put").innerHTML="Username should be character";
            return false;
        }
        if(pass==""){
            document.getElementById("putt").innerHTML="Write a valid password ";
            return false;
        }
        if(pass.length<3){
            document.getElementById("putt").innerHTML="Password is too Short";
            return false;
        }

        if(pass.length>11){
            document.getElementById("putt").innerHTML="Password is too Long";
            return false;
        }
        if(compass==""){
            document.getElementById("puta").innerHTML="Write Password Again";
            return false;
        }
        if(compass!=pass){
            document.getElementById("puta").innerHTML="Password does,t match";
            return false;
        }
        if(mobile==""){
            document.getElementById("putc").innerHTML="Enter a valid Phone no.";
            return false;
        }
        if(isNaN(mobile)){
            document.getElementById("putc").innerHTML="Must be a digit";
            return false;
        }
        if(mobile.length!=10){
            document.getElementById("putc").innerHTML="Invalid Phone no.";
            return false;
        }

        if(mail==""){
            document.getElementById("putd").innerHTML="Enter a valid E-mail";
            return false;
        }
        if(mail.startsWith('@')){
            document.getElementById("putd").innerHTML="Invalid E-mail";
            return false;
        }
        if((mail.charAt(mail.length-10)!="@") && (mail.charAt(mail.length-9)!="@")){
            document.getElementById("putd").innerHTML="Invalid E-mail";
            return false;
        }
        if((mail.charAt(mail.length-4)!=".") && (mail.charAt(mail.length-3)!=".")){
            document.getElementById("putd").innerHTML="Invalid Id";
            return false;
        }
        if((mail.substr(mail.length-3,3) != "com") && (mail.substr(mail.length-2,2) != "in")){
            document.getElementById("putd").innerHTML="...Invalid Id";
            return false;
        
     }
    }