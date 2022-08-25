var Elementinput = document.getElementById('input');
var Elementbutton = document.getElementById('button');
var Elementoutput = document.getElementById('output');

Elementbutton.addEventListener("click", function () {
    if (Elementinput.value) {
        console.log(Elementinput.value)
        Elementinput.value = "";
    
    if (Elementinput.value >= 5 && Elementinput.value <= 11) {
        
        console.log("Infantil");
    
    } else if (Elementinput.value >= 12 && Elementinput.value <= 17) {
    
        console.log("Juvenil");
    
    } /*else {
    
        console.log("Adultos");
    
    }*/
}

})