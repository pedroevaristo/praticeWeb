var vetor = [];
var btn = document.getElementById('button');

var txt = document.getElementById('text');

var output = document.getElementById('show');

btn.addEventListener("click", function () {
    vetor.push(txt.value);
    txt.value = "";

    var list = document.createElement("ul");
    for (var i = 0; i < vetor.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = vetor[i] + "² = " + Math.pow(vetor[i], 2);
        list.appendChild(item);
        output.innerHTML = "";
        output.appendChild(list);

    }

})






/*
let vet = [1, 2, 3, 4];
var loop, y;
loop = 0;
while (loop < 4) {
    y = Math.pow(vet[loop], 2);
    if (y > 10) {
        console.log("o numero ultrapassou o requerido");
        return 0;
     }
     console.log(y);
    loop += 1;
}

*/