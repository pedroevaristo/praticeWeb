var Elementinput = document.getElementById('input');
var Elementbutton = document.getElementById('button');
var Elementoutput = document.getElementById('output');

Elementbutton.addEventListener("click", function () {
    if (Elementinput.value) {
        console.log(Elementinput.value)
        
        if (Elementinput.value >= 5 && Elementinput.value <= 11) {

            Elementoutput.innerHTML = "Infantil";
            console.log("Infantil");

        } if (Elementinput.value >= 12 && Elementinput.value <= 17) {
            Elementoutput.innerHTML = "Juvenil";
            console.log("Juvenil");

        } else {
            Elementoutput.innerHTML = "Adulto";
            console.log("Adultos");

        }
        Elementinput.value = "";
    }

})