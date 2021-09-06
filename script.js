

let outputScreen = document.getElementById("output-screen");

function display(val){
 outputScreen.value += val; 
}

function cal(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid input");
    }
}
function Clear(){
    outputScreen.value="";
}
function Del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}