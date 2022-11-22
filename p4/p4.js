array = [];

var text = document.getElementById("textInformation");

var button = document.getElementById("buttonInformation");

var show = document.getElementById("showInformation");

button.addEventListener("click", function(){
    
    array.push(text.value);
    
    text.value = "";

    var pointOrder = document.createElement("ol");

    for(var i = 0; i < array.length; i +=1 ){



    }


})