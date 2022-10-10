var vetor = [];
var result = document.getElementById('result');
var buttn = document.getElementById('buttn');


buttn.addEventListener("click", function () {
    var list = document.createElement("ul");
    var inf = parseInt(document.getElementById('inf').value);
    for (var i = 0; i < inf; i++) {
        var listnumb = document.createElement("li");
        result.appendChild(listnumb);
        listnumb.appendChild(list);
        list.innerHTML = i;
        

       
    }



})