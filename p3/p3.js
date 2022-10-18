var inNumber1 = document.getElementById('numNote1');
var inNumber2 = document.getElementById('numNote2');
var inNumber3 = document.getElementById('numNote3');

var result = document.getElementById('result');

buttonSend.addEventListener("click", function () {
   
   var array = [];
   
   var resultStudent = 0;
  
   resultStudent = Number(inNumber1.value) + Number(inNumber2.value) + Number(inNumber3.value);

   array.push(resultStudent);
   

   var list = document.createElement("ol");

   for (var i = 0; i < array.length; i++) {

      result.innerHTML += " <li> " + "Nota do aluno " + Math.round(array[i]/3) + " </li> ";

   }

   inNumber1.value = "";
   inNumber2.value = "";
   inNumber3.value = "";

})

/*list.appendChild(listNumb);
result.innerHTML = "";
result.appendChild(list);*/
//document.getElementById('result').innerHTML = Math.round(result / 3);

