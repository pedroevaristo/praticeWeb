var result = document.getElementById('result');
var buttn = document.getElementById('buttn');


buttn.addEventListener("click", function () {
    var list = document.createElement("ul");
    var inf = parseInt(document.getElementById('inf').value);

    var listnum = document.createElement("ol");
    
    for (var i = 0; i < inf; i++) {
        var list = document.createElement("li");
        list.innerHTML = i + " = " + i ;
        listnum.appendChild(list);

        result.appendChild(listnum);
        console.log(i)
    }



})