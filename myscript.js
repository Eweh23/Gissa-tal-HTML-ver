var svar = Math.floor(Math.random() * 100) + 1;
var input = document.getElementById("gissning");
var text = document.getElementById("hint");
var count = 0;

function func(){
    count ++;

        if(input.value < svar){
            text.innerHTML="Too low";
            
        }
        else if(input.value > svar){
            text.innerHTML="Too high";
        }
        else{
            text.innerHTML="Correct!";
        }
        document.getElementById("txtcount").innerHTML="Count: " + count;
}
