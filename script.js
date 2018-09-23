$(document).ready(function(){
    $('#ham, #ex').click(function(){
        $('#ham, #ex').toggle();
        $('#linkBox').toggleClass('visible');
    });
});

$(document).ready(function(){
    $('#cave').click(function(){
        $('#iS #hero').toggle();
        $('#iS').toggleClass('zoom');
    });
});

$(document).ready(function(){
    $('#oldBu, #newBu').click(function(){
        $('#newUser, #oldUser').toggle();
    });
});

//Regular Expression
var userReg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$","i");
var passReg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$","i");
var mailReg = new RegExp("^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$","i"); 
var mailReg2 = new RegExp("^([a-zA-Z]*[a-zA-Z0-9\._\-]*@[a-zA-Z0-9\._\-]*[\.]+[a-zA-Z]{2,4})$")
/*REGISTER FORM*/
var nameSave;
var passSave;
var repSave;
var emailSave;

function validateName(){
    var userName = document.getElementById('use1').value;

        if(userReg.test(userName)){
            
            producePrompt("use1Label","use1","#006121","thick solid #006121");
            nameSave = userName;
            return true;
        }
        else{
            producePrompt("use1Label","use1","#A00000","thick solid #A00000");
            return false;
            
        }
    }

function validatePass(){
    var password1 =document.getElementById('pass1').value;
        if(passReg.test(password1)){
            
            producePrompt("pass1Label","pass1","#006121","thick solid #006121");
            passSave = password1;
            return true;
        }
        else{
            producePrompt("pass1Label","pass1","#A00000","thick solid #A00000");
            return false;
            
        }
    }

function validatePass2(){
    var password2 =document.getElementById('pass2').value;
        if(passReg.test(password2)){
            if(password2==passSave){
                producePrompt2("pass1Label","pass1","pass2Label","pass2","#006121","thick solid #006121");
                repSave = password2;
                return true;
            }
        }
        else{
            producePrompt2("pass1Label","pass1","pass2Label","pass2","#A00000","thick solid #A00000");
            return false;
            
        }
    }

function validateMail(){
    var email1 =document.getElementById('mail1').value;
    console.log(mailReg.test(email1));
        if(mailReg2.test(email1)){
            
            producePrompt("mail1Label","mail1","#006121","thick solid #006121");
            emailSave = email1;
            return true;
        }
        else{
            producePrompt("mail1Label","mail1","#A00000","thick solid #A00000");
            return false;
            
            
        }
    }
/*Functions for producing response */
function producePrompt(promptLocation1,promptLocation2, color,borderprop){
    document.getElementById(promptLocation1).style.color = color;
    document.getElementById(promptLocation2).style.border = borderprop;
}
function producePrompt2(promptLocation1,promptLocation2,promptLocation3,promptLocation4, color,borderprop){
    document.getElementById(promptLocation1).style.color = color;
    document.getElementById(promptLocation2).style.border = borderprop;
    document.getElementById(promptLocation3).style.color = color;
    document.getElementById(promptLocation4).style.border = borderprop;
}

/*SUBMIT REGRISTER*/
function validateNewForm(){

    if(!validateName() || !validatePass() || !validatePass2() || !validateMail()){
        jsShow("submitLabel1")
        producePrompt("submitLabel1","newButtonSub","#A00000","thick solid #A00000")
        setTimeout(function(){jsHide("submitLabel1");}, 3000);
        return false;
    }
    else{
        producePrompt("submitLabel1","newButtonSub","#006121","thick solid #006121");
        document.location = "./login.html"
    }
}
function jsShow(id){
    document.getElementById(id).style.display = "initial"
}
function jsHide(id){
    document.getElementById(id).style.display = "none"
    
}


/*
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();

document.write( year + "-"+month+"-"+day);
window.onload = function(){
    var dateIn = document.getElementById('date1');
if(month < 9 || day < 9){
        if(day<9 && month < 9){
            dateIn.value = year + "-0"+month+"-0"+day;
        }
        else if(month < 9){
            dateIn.value = year + "-0"+month+"-"+day;
            
        }
        else { dateIn.value = year + "-"+month+"-0"+day;}
    }
    else{
        dateIn.value = year + "-"+month+"-"+day;
    }
}
 */