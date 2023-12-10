// counter 

var counter = 0;

function add(){
    counter++;
    document.getElementById("the-zero").innerHTML = counter;
}

function decrement(){
     counter--;
    document.getElementById("the-zero").innerHTML = counter;
}

// doller convert

function mouse(){

var ahmed = document.getElementById("doller").value;
var result = document.getElementById("result");

if(isNaN(ahmed)){
result.innerHTML ="this is not a number,enter any number";
return false;
}
else if(ahmed<0){
result.innerHTML ="it must be a postive number";
return false;
}
else if(ahmed==0){
result.innerHTML = "you must enter above this number";
return false;
}
else{
result.innerHTML = ahmed*31;
return false;
 }
}



// who is the winner

var x = prompt("how is the winner in the champion.");

switch(x){

case "ahmed":{
alert("ahmed is the scound place");
break;
}

case "mahmod":{
    alert("mahmod is the final place");
    break;
    }
    
    case "noah":{
        alert("noah is the third place");
        break;
        }
        case "ali" :{
alert("you are right ali is the winner");
break;
        }
default :{
alert("ali is the the winner in the champion");
break;
}
}